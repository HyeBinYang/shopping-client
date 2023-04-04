import React, { useState } from "react";
import styled from "styled-components";
import colors from "../styles/colors";
import InputGroup from "../components/productRegister/InputGroup";
import { categoryList } from "../utils/const";
import axiosInstance from "../utils/axios";

const Wrapper = styled.main`
  width: 1024px;
  margin: 0 auto;
  padding: 80px 40px;
  margin: 0 auto;
`;

const ImageRegisterButtonWrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${colors.grey[50]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.grey[300]};
  color: ${colors.grey[600]};
  position: relative;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 30px;
  border-bottom: 3px solid ${colors.grey[900]};
`;

const InputGroupContainer = styled.section`
  display: flex;
  flex-direction: column;

  & > * {
    padding: 40px 0;
    border-bottom: 1px solid ${colors.grey[300]};
  }

  & > *:last-child {
    border-bottom: none;
  }

  .input-text {
    width: 100%;
    padding: 10px;
    font-size: 18px;
  }
`;

const InputWithUnitWrapper = styled.div`
  input {
    width: 50%;
    padding: 10px;
    font-size: 18px;
    margin-right: 10px;
  }

  span {
    font-size: 20px;
  }
`;

const CategoryList = styled.ul`
  padding: 10px 0;
  border: 2px solid ${colors.orange[400]};
  height: 240px;
  overflow: auto;
`;

const CategoryItem = styled.li<{ selected?: boolean }>`
  padding: 15px;
  font-size: 18px;
  color: ${({ selected = false }) => selected && colors.orange[400]};
  cursor: pointer;

  &:hover {
    background-color: ${colors.grey[100]};
  }
`;

const DescriptionStyle = styled.textarea`
  width: 100%;
  padding: 1rem;
  resize: none;
`;

const FloatingFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: ${colors.grey[50]};
`;

const RegisterButtonWrapper = styled.div`
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const RegisterButton = styled.button`
  width: 12rem;
  height: 3.5rem;
  font-size: 20px;
  font-weight: 700;
  background-color: ${colors.orange[500]};
  color: #fff;
  border: none;
  letter-spacing: 0.1rem;
  cursor: pointer;
`;

const ProductRegister = () => {
  const [imageSrc, setImageSrc] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(1000);
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");

  const encodeFileToBase64 = (fileBlob: File): Promise<void> => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc([...imageSrc, reader.result as string]);
        resolve();
      };
    });
  };

  return (
    <Wrapper>
      <Title>상품 등록</Title>
      <InputGroupContainer>
        <InputGroup>
          <InputGroup.Label title="상품이미지" required />
          <InputGroup.Content>
            <ImageRegisterButtonWrapper>
              이미지 등록
              <input
                type="file"
                accept="image/jpg, image/jpeg, image/png"
                multiple
                onChange={(e) => {
                  if (e.target.files && e.target.files.length) encodeFileToBase64(e.target.files[0]);
                }}
              />
            </ImageRegisterButtonWrapper>
            <div>
              {imageSrc.map((src) => (
                <img key={src} src={src} alt="" />
              ))}
            </div>
          </InputGroup.Content>
        </InputGroup>
        <InputGroup center>
          <InputGroup.Label title="제목" required />
          <InputGroup.Content>
            <input type="text" className="input-text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </InputGroup.Content>
        </InputGroup>
        <InputGroup>
          <InputGroup.Label title="카테고리" required />
          <InputGroup.Content>
            <CategoryList>
              {categoryList.map((category, index) => (
                <CategoryItem key={category} selected={selectedCategory === 1000 + index} onClick={() => setSelectedCategory(1000 + index)}>
                  {category}
                </CategoryItem>
              ))}
            </CategoryList>
          </InputGroup.Content>
        </InputGroup>
        <InputGroup center>
          <InputGroup.Label title="가격" required />
          <InputGroup.Content>
            <InputWithUnitWrapper>
              <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
              <span>원</span>
            </InputWithUnitWrapper>
          </InputGroup.Content>
        </InputGroup>
        <InputGroup>
          <InputGroup.Label title="설명" required />
          <InputGroup.Content>
            <DescriptionStyle rows={6} value={content} onChange={(e) => setContent(e.target.value)} />
          </InputGroup.Content>
        </InputGroup>
      </InputGroupContainer>
      <FloatingFooter>
        <RegisterButtonWrapper>
          <RegisterButton
            onClick={() => {
              axiosInstance
                .post("product", { title, category: selectedCategory, price, content })
                .then((res) => {
                  alert("등록이 완료되었습니다.");
                })
                .catch(() => {
                  alert("등록과정에서 에러가 발생했습니다!");
                });
            }}
          >
            등록하기
          </RegisterButton>
        </RegisterButtonWrapper>
      </FloatingFooter>
    </Wrapper>
  );
};

export default ProductRegister;
