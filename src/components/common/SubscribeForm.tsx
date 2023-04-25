import React, { useEffect } from "react";
import styled from "styled-components";
import { Input } from "@/libs/Input/Input";
import { Button } from "@/libs/Button/Button";
import { media } from "@/helpers/index";

interface ISubscribeForm {
  isSmallGap?: boolean;
}

const StyledSubscribeForm = styled.form<{ isSmallGap: boolean }>`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 121px;
  align-items: center;
  width: 100%;

  ${media.tablet} {
    grid-template-columns: 1fr 137px;
  }

  ${media.laptop} {
    gap: ${({ isSmallGap }) => (isSmallGap ? 16 : 58)}px;
    grid-template-columns: 1fr 140px;
  }
`;

const SubscribeForm: React.FC<ISubscribeForm> = (props) => {
  const { isSmallGap = false } = props;

  return (
    <StyledSubscribeForm isSmallGap={isSmallGap} action={process.env.REACT_APP_MAILCHIMP_URL} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self">
      <div className="mc-field-group">
        <Input
          name="EMAIL"
          placeholder="Enter your e-mail"
          successText="Subscribed!"
          required
          isDisabled={false}
          isSuccess={false}
          error={null}
        />
        <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
        <div id="mce-responses" className="clear foot">
          <div className="response response-error" id="mce-error-response" style={{display: "none"}}></div>
          <div className="response response-success" id="mce-success-response" style={{display: "none"}}></div>
        </div> 
      </div>
      <Button
        size="m"
        type="submit"
        isDisabled={false}
        isBlock={true}
      >
        Subscribe
      </Button>
    </StyledSubscribeForm>
  );
};

export default SubscribeForm;
