import React from 'react'
import styles from "./Branding.module.css"
import leftlineArrow from "../../assets/leftLineArrow.png"
import { useState } from 'react'
import dropdown from "../../assets/dropdown.png";
import add from "../../assets/add.png";
import { useRef } from 'react';
import Purpose from '../Purpose/Purpose';
import Scope from '../Scope/Scope';


const Branding = () => {



  const CompanyName = useRef();
  const Header = useRef(); 
  const PrimaryBtn = useRef();
  const SecondaryBtn = useRef();

  const allDetails =()=>{
      const name = CompanyName.current.value;
      const Header = Header.current.value;
      const PrimaryBtn = PrimaryBtn.current.value;
      const SecondaryBtn = SecondaryBtn.current.value;

      console.log(name);
  }

  const [rotateVal,setrotateVal] = useState(360);
const [show, setShow] = useState(false);
const [PurposeList, setPurposeList] = useState([]);
const [ScopeList, setScopeList] = useState([]);

const[Scopevalue, setScope] = useState("Email");

const onAddPurpose = (event) => {
  setPurposeList([...PurposeList, Purpose]);
};

const onaddScope = (event) => {
  setScopeList([...ScopeList, Scope]);
};

const hideOrShow = (event) => {
  setShow(!show);
  if(rotateVal === 360)
      setrotateVal(270);
  else
      setrotateVal(360);    
};
  const [file, setFile] = useState(null);
  const[content , setContent] = useState(false);

  
  

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleUploadClick = () => {
    document.getElementById("image").click(); 
  };
  return (
    <div>
      <div className={styles.main_container}>
        {/* //todo: Nav_Containers */}
        <div className={styles.navlinks_Container}>
          <div className={styles.lineArrow}>
            <button>
              <img src={leftlineArrow} alt="" style={{
                width: "100%",
                height: "100%"
              }} />
            </button>
          </div>
          
             

          
          <div className={styles.segmentedTabs}>
            <button className={content ?styles.contentBtn:styles.contentBtnSelected} onClick={() =>setContent(false)}>Content</button>
            <button className={content ?styles.BrandingBtnSelected:styles.BrandingBtn}   onClick={() =>{
              
              setContent(true)}}>Branding</button>
          </div>
          <div className={styles.navigationArrow}>

          </div>
        </div>

        {content ? (
        <div className={styles.bodyMainContainer}>
          {/*//todo:: first part */}
          <div className={styles.companyLogo_container}>
            <div className={styles.companyLogo_heading}>Company Logo</div>
            <div className={styles.uploadLogo_section}>
              <label htmlFor="upload logo" className={styles.uploadLogo_label}>Upload Logo</label>
              <input
        type="file"
        name="image"
        id="image"
        style={{ display: "none" }}
        onChange={handleChange}
      />
             
              <button className={styles.uploadBtnContainer} onClick={handleUploadClick}>
                <span className={styles.uploadBtn}>+</span>
                <span className={styles.uploadBtn}>Upload</span>
                {/* <input type="file" name="" id="" /> */}
              </button>
              
            </div>
          </div>

          {/* //todo: second part */}
          <div className={styles.coloursContainer}>
            <h2 className={styles.coloursContainer_heading}>Colours</h2>
            <div className={styles.colourSectionContainer}>
              <p className={styles.colourSecitonLabel}>Primary Text Colour</p>
              <button className={styles.colourPicker}>
                <span className={styles.pickerColorChoice}></span>
                <span className={styles.colourPicker_innerText}>#333333</span>
                <span className={styles.colourPicker_innerText}>100%</span>
              </button>
            </div>
            <div className={styles.colourSectionContainer}>
              <p className={styles.colourSecitonLabel}>Secondary Text Colour</p>
              <button className={styles.colourPicker}>
                <span className={styles.pickerColorChoice}></span>
                <span className={styles.colourPicker_innerText}>#333333</span>
                <span className={styles.colourPicker_innerText}>100%</span>
              </button>
            </div>
            <div className={styles.colourSectionContainer}>
              <p className={styles.colourSecitonLabel}>Brand Colour</p>
              <button className={styles.colourPicker}>
                <span className={styles.pickerColorChoice}></span>
                <span className={styles.colourPicker_innerText}>#333333</span>
                <span className={styles.colourPicker_innerText}>100%</span>
              </button>
            </div>
            <div className={styles.colourSectionContainer}>
              <p className={styles.colourSecitonLabel}>Primary Button Text Colour</p>
              <button className={styles.colourPicker}>
                <span className={styles.pickerColorChoice}></span>
                <span className={styles.colourPicker_innerText}>#333333</span>
                <span className={styles.colourPicker_innerText}>100%</span>
              </button>
            </div>

          </div>

          {/*//todo: third part */}
          <div className={styles.typographyContainer}>
            <h2 className={styles.typographyContainer_heading}>Typography</h2>
            <div className={styles.typographyFontSelection}>
              <p className={styles.fontSectionLabel}>Select Font</p>
              <select name="font" id="" className={styles.listsOfFonts}>
                <option value="Inter" className={styles.listsOfFontsLabel}>Inter</option>
              </select>
            </div>
          </div>
        </div>
          ) : (
            <div className={styles.main}>
                  <div className={styles.frame1}>
                    <p>Consent notice details</p>
                    <div className={styles.subframe1}>
                      <label for="Cname">Company name for display</label>
            
                      <input type="text" id="Cname" name="Cname" ref={CompanyName} onChange={allDetails} ></input>
                    </div>
                    <div className={styles.subframe1}>
                      <label for="Cname">Header content</label>
            
                      <textarea
                        type="text"
                        id="Cname"
                        rows="4"
                        cols="50"
                        name="Cname"
                        ref={Header}
                        onChange={allDetails}
            
                      ></textarea>
                    </div>
                  </div>
            
                  <div className={styles.frame2}>
                    <div className={styles.head}>Scope & Purpose</div>
                    <div className={styles.content}>
                      <div className={styles.scope}>
                        <div className={styles.sub1} onClick={hideOrShow}>
                          <img src={dropdown} alt="icon" style={{rotate: `${rotateVal}deg`}} />
                          <p>{Scopevalue}</p>
                        </div>
            
                      {!show && <> <div className={styles.sub2}>
                          <div>
                            <label for="Cname">Scope</label>
                          </div>
                          <div>
                            <input type="text" id="Cname" name="Cname" onChange={(e) => {setScope(e.target.value)
                               
                            }}></input>
                          </div>
                        </div>
                        <div>
                          <hr style={{ width: "537px", height: "1px", color: "#E6E6E6" }} />
                        </div>
            
                        {PurposeList.map((Purpose, index) => (
                          <div>
                            <Purpose key={index} />
                          </div>
                        ))}
            
                        <button className={styles.addPurpose} onClick={onAddPurpose}>
                          <img
                            src={add}
                            alt="icon"
                            style={{ width: "20px", height: "20px" }}
                          />
                          <p>Add Purpose</p>
                        </button>
                        </>}
            
                      </div>
                    </div>
            
                    {ScopeList.map((Scope, index) => (
                      <Scope key={index} />
                    ))}
            
                    <button onClick={onaddScope}>
                      <img src={add} alt="icon" style={{ width: "20px", height: "20px" }} />
                      <p>Add Scope</p>
                    </button>
                  </div>
            
                  <div className={styles.frame3}>
                    <p>Call to action</p>
                    <div>
                      <label for="Cname">Primary button text</label>
                      <input type="text" id="Cname" name="Cname" useRef={PrimaryBtn} onChange={allDetails}></input>
                    </div>
                    <div>
                      <label for="Cname">Secondary button text</label>
                      <input type="text" id="Cname" name="Cname" useRef={SecondaryBtn} onChange={allDetails}></input>
                    </div>
                  </div>
                  <button>Save & Proceed</button>
                </div>
          )}

      </div>
    </div>
  )
}

export default Branding