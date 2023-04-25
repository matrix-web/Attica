import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { colors } from "@/helpers/index";
import { Icon } from "@/libs/Icon/Icon";

const WrapperInput = styled.div<{ isError: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  transition: 0.3s;
  outline: none;
  overflow: hidden;
  font-family: var(--font-brand), sans-serif;

  ${({ isError }) => css`
    border-bottom: 1px solid ${isError ? colors.red100 : colors.white};
  `};

  ${({ isError }) => css`
    &:hover:not(input:disabled) {
      border-color: ${isError ? colors.red200 : colors.white};
    }

    &:focus-within:not(input:disabled) {
      border-color: ${isError ? colors.red200 : colors.white};
    }
  `}
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 17px 10px 17px 0;

  outline: none;
  color: ${colors.white};
  font-size: 14px;
  font-weight: 400;
  font-family: inherit;
  border: initial;

  &::placeholder {
    color: inherit;
    font-size: inherit;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const StyledErrorMessage = styled.span`
  margin-top: 4px;
  font-size: 12px;
  line-height: 18px;
  color: ${colors.red200};
`;

export interface IInput {
  name: string;
  placeholder?: string;
  error?: string | null;
  type?: string;
  value?: string | number;
  successText?: string;
  register?: any;
  rules?: any;
  isDisabled?: boolean;
  isSuccess?: boolean;
  required?: boolean;
  onInput?: (arg: string) => void;
  onChange?: (arg: string) => void;
}

const Input: React.FC<IInput> = (props): JSX.Element => {
  const {
    name,
    placeholder = "",
    successText = "",
    register = null,
    error = null,
    value = "",
    type = "text",
    required = false,
    isDisabled = false,
    isSuccess = false,
    onInput,
    onChange,
  } = props;

  const [content, setContent] = useState(value);
  const [customType, setCustomType] = useState(type);

  useEffect(() => {
    setContent(value);
    setCustomType(type);
  }, [value, type]);

  const handleInputChange = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    if (!onChange) return;
    onChange(event.currentTarget.value);
  };

  const handleInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const tempValue = event.currentTarget.value;

    setContent(tempValue);
    if (!onInput) return;
    onInput(tempValue.toString());
  };

  return (
    <>
      <WrapperInput isError={!!error}>
        <StyledInput
          name={name}
          type={customType}
          disabled={isDisabled || isSuccess}
          value={isSuccess && successText ? successText : content}
          placeholder={placeholder}
          ref={register}
          required={required}
          onChange={handleInputChange}
          onInput={handleInput}
        />

        <Icon
          name={isSuccess ? "check" : "arrow-right-long"}
          color="white"
          size={isSuccess ? 16 : 32}
        />
      </WrapperInput>

      {error ? <StyledErrorMessage>{error}</StyledErrorMessage> : <></>}
    </>
  );
};

export { Input };
