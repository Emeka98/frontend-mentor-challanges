import React, { useEffect } from "react";
import { useState } from "react";
import { Formik, Form, Field, useFormikContext } from "formik";
import { generatePassword } from "./generatePassword";
import RightArrow from "../assets/icon-arrow-right.svg";

function FormSection({ onSubmit }) {
  const [level, setLevel] = useState(0);

  return (
    <>
      <Formik
        initialValues={{
          length: 0,
          getUpperCase: false,
          getLowerCase: false,
          getNumber: false,
          getSymbols: false,
        }}
        onSubmit={(values) => {
          console.log("Form Gönderildi", values);
          onSubmit(values); // onSubmit işlevini çağırarak şifre oluşturmayı yapabilirsiniz

          const selectedOptionsCount = Object.values(values).filter(
            (value) => value === true
          ).length;
          setLevel(selectedOptionsCount);
        }}
      >
        {({ values }) => (
          <Form>
            <div className="form-control">
              <div className="label-data">
                <label htmlFor="length">Character Length</label>
                <p className="length-number">{values.length}</p>
              </div>
              <Field type="range" id="length" name="length" min="0" max="20" />
            </div>

            <div className="form-control">
              <label>
                <Field type="checkbox" name="getUpperCase" />
                Include Uppercase Letters
              </label>
            </div>

            <div className="form-control">
              <label>
                <Field type="checkbox" name="getLowerCase" />
                Include Lowercase Letters
              </label>
            </div>

            <div className="form-control">
              <label>
                <Field type="checkbox" name="getNumber" />
                Include Numbers
              </label>
            </div>

            <div className="form-control">
              <label>
                <Field type="checkbox" name="getSymbols" />
                Include Symbols
              </label>
            </div>

            <div className="show-strength">
              <p className="strength-name">STRENGTH</p>

              <div className="strength-container">
                <h5>
                  {level === 0
                    ? ""
                    : level === 1
                    ? "TOO WEAK!"
                    : level === 2
                    ? "WEAK"
                    : level === 3
                    ? "MEDIUM"
                    : "STRONG"}
                </h5>
                <span
                     className={`strength ${level >= 1 ? "active-1" : ""}`}
                ></span>
                <span
                  className={`strength ${level >= 2 ? "active-1 active-2" : ""}`}
                ></span>
                <span
                  className={`strength ${
                    level >= 3 ? "active-1 active-2 active-3" : ""
                  }`}
                ></span>
                <span
                  className={`strength ${
                    level >= 4 ? "active-1 active-2 active-3 active-4" : ""
                  }`}
                ></span>
              </div>
            </div>
            <button
              className="btn-primary"
              type="submit"
              onClick={() => generatePassword(values)}
            >
              Submit
              <img src={RightArrow} alt="right-arrow" />
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormSection;
