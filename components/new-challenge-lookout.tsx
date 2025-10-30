import { Button } from "@heroui/react";
import EmailInputComponent from "./email-input-component";
import GeneralInputComponent from "./general-input-component";
import { RiArrowRightSLine } from "@remixicon/react";

const NewChallengeLookout = () => {
  return (
    <div className="bg-white py-20 md:py-48 px-5 lg:px-40 grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 justify-between md:gap-x-10">
      <div className="flex flex-col">
        <span className="text-4xl md:text-6xl font-instrument-regular">
          We’re l👀king for new challenge
        </span>
        <br />
        <span className="sm:max-w-md text-xs">
          Viibre helps businesses grow with smart, tailored software solutions
          that streamline operations, enhance experiences, and drive results.
        </span>
      </div>
      <div className="flex flex-col space-y-3">
        <GeneralInputComponent label="Name" />
        <EmailInputComponent />
        <GeneralInputComponent label="Project Details" isRequired />
        <div className="flex justify-end mt-2">
          <Button
            size="sm"
            color="primary"
            radius="full"
            className="h-9"
            endContent={<RiArrowRightSLine size={16.5} />}
          >
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewChallengeLookout;
