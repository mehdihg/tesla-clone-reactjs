import React from "react";
import { ButtonGroup } from "../styles/HomePage/ButtonGroup";
import { ButtonSection } from "../styles/HomePage/ButtonSection";
import { SectionContainer } from "../styles/HomePage/Section";
import { TextItem } from "../styles/HomePage/SectionTextItem";
import { Chevron } from "../styles/HomePage/Chevron";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
const Section = ({
  titleOne,
  titleTwo,
  ButtonDark,
  ButtonLight,
  chevron,
  image,
  id,
  className,
  footer,
}) => {
  return (
    <SectionContainer image={image} id={id}>
      <Fade cascade>
        <div className="reactRevealClass">
          <TextItem>
            <h1>{titleOne}</h1>
            <h2>{titleTwo}</h2>
          </TextItem>
        </div>
      </Fade>

      <ButtonGroup>
        <ButtonSection className={className}>
          <Slide left>
            <button>{ButtonDark}</button>
          </Slide>
          {ButtonLight && (
            <Slide right>
              <button>{ButtonLight}</button>
            </Slide>
          )}
        </ButtonSection>

        {chevron && <Chevron>{chevron}</Chevron>}
      </ButtonGroup>

      {footer && <Fade top>{footer}</Fade>}
    </SectionContainer>
  );
};

export default Section;
