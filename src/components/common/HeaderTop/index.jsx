import React from "react";
import CommonBtn from "../CommonBtn";
import { Wrapper } from "./styled-index";

function HeaderTopCommon({
  title,
  textBtn,
  style,
  onClick,
  isBtn,
  isBtn2,
  textBtn2,
  onClick2,
  style2,
  optionMap,
  isInput2,
  onChange,
  style3,
  isInput3,
  onChange2,
  optionMap2,
  onChange3,
  isInput4,
  style4,
  optionMap3,
  isInput5,
  style5,
  onChange4,
  optionMap4,
  isInput6,
  style6,
  onChange5,
  optionMap5,
  isInput7,
  style7,
  onChange6,
  optionMap6,
}) {
  return (
    <Wrapper>
      <h3>{title}</h3>
      {isBtn === false ? null : (
        <CommonBtn style={style} onClick={onClick}>
          {textBtn}
        </CommonBtn>
      )}
      {isBtn2 === false ? (
        <CommonBtn style={style2} onClick={onClick2}>
          {textBtn2}
        </CommonBtn>
      ) : null}
      {isInput2 === false ? (
        <select style={style3} onChange={onChange}>
          <option selected disabled>
            категория изменить
          </option>
          {optionMap.map((elem, index) => (
            <option value={elem.category_id} key={index}>
              {elem.title_ru}
            </option>
          ))}
        </select>
      ) : null}
      {isInput3 === false ? (
        <select style={style3} onChange={onChange2}>
          <option selected disabled>
            категория удалить
          </option>
          {optionMap2.map((elem, index) => (
            <option value={elem.category_id} key={index}>
              {elem.title_ru}
            </option>
          ))}
        </select>
      ) : null}
      {isInput4 === false ? (
        <select style={style4} onChange={onChange3}>
          <option selected disabled>
          информация удалить
          </option>
          {optionMap3.map((elem, index) => (
            <option value={elem.id} key={index}>
              {elem.prognoz}
            </option>
          ))}
        </select>
      ) : null}
            {isInput5 === false ? (
        <select style={style5} onChange={onChange4}>
          <option selected disabled>
          информация изменить
          </option>
          {optionMap4.map((elem, index) => (
            <option value={elem.id} key={index}>
              {elem.prognoz}
            </option>
          ))}
        </select>
      ) : null}
                  {isInput6 === false ? (
        <select style={style6} onChange={onChange5}>
          <option selected disabled>
          информация изменить
          </option>
          {optionMap5.map((elem, index) => 
              <option value={elem.id} key={index}>
                {elem.kvartal}
              </option>
          )}
        </select>
      ) : null}
                  {isInput7 === false ? (
        <select style={style7} onChange={onChange6}>
          <option selected disabled>
          информация удалить
          </option>
          {optionMap6.map((elem, index) => (
            <option value={elem.id} key={index}>
              {elem.kvartal}
            </option>
          ))}
        </select>
      ) : null}
    </Wrapper>
  );
}

export default HeaderTopCommon;
