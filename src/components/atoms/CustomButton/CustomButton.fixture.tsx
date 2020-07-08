import * as React from "react";
import CustomButton from "./CustomButton";
import "./CustomButton.scss";

const CustomButtonCosmos = () => {
  return (
      <div style={{ display: 'flex', flexDirection:'column', justifyContent:'space-evenly', height: '50vh'}}>
        <div>
          <CustomButton>...</CustomButton>
        </div>
        <div>
          <CustomButton className='btn-component--AddCard'>+ Add a card</CustomButton>
        </div>
          <div>
              <CustomButton className='btn-component--AddCard'>+ Add another card</CustomButton>
          </div>
          <div>
              <CustomButton className='btn-component--AddNewList'>+ Add another list</CustomButton>
          </div>
          <div>
              <CustomButton className='btn-component--AddAction'>Add list</CustomButton>
          </div>
          <div>
              <CustomButton className='btn-component--AddAction'>Add Card</CustomButton>
          </div>
      </div>
  );
};

export default CustomButtonCosmos;
