import { SVGProps, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { Choice } from "../interfaces/graphcms";

interface Props {
  choices: Array<Choice>;
}

const Choices = (props: Props) => {
  const [selected, setSelected] = useState(props.choices[0]);

  return (
    <div className="w-full px-4 py-16">
      <div className="w-full max-w-md mx-auto">
        <RadioGroup value={selected} onChange={setSelected}>
          {/* <RadioGroup.Label className="sr-only">Choice</RadioGroup.Label> */}
          <div className="space-y-2">
            {props.choices.map((choice) => (
              <RadioGroup.Option
                key={choice.choice}
                value={choice.choice}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                      : ""
                  }
                  ${
                    checked
                      ? "bg-primary-500 bg-opacity-75 text-white"
                      : "bg-white"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {choice.choice}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-sky-100" : "text-gray-500"
                            }`}
                          >
                            <span></span>{" "}
                            <span aria-hidden="true">&middot;</span>{" "}
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-white">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-6 h-6"
                          >
                            <circle
                              cx={12}
                              cy={12}
                              r={12}
                              fill="#fff"
                              opacity="0.2"
                            />
                            <path
                              d="M7 13l3 3 7-7"
                              stroke="#fff"
                              strokeWidth={1.5}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default Choices;
