import React from "react";

const SideBar = () => {
  return (
    <div>
      <div class="condition-render-verticalFilters condition-render-boundary-top">
        <div class="vertical-filters-filters header-container">
          <span class="header-title">FILTERS</span>
          <span class="header-clearAllBtn">CLEAR ALL</span>
        </div>
        <div class="vertical-filters-filters">
          <ul class="gender-list">
            <li>
              <label class="common-customRadio gender-label undefined">
                <input type="radio" value="men,men women" /> MEN
                <div class="common-radioIndicator"></div>
              </label>
            </li>
            <li>
              <label class="common-customRadio gender-label">
                <input type="radio" value="women,men women" /> WOMEN
                <div class="common-radioIndicator"></div>
              </label>
            </li>
            <li>
              <label class="common-customRadio gender-label">
                <input type="radio" value="boys,boys girls" /> BOYS
                <div class="common-radioIndicator"></div>
              </label>
            </li>
            <li>
              <label class="common-customRadio gender-label">
                <input type="radio" value="girls,boys girls" /> GIRLS
                <div class="common-radioIndicator"></div>
              </label>
            </li>
          </ul>
        </div>
        <div class="vertical-filters-filters categories-container">
          <span class="vertical-filters-header">Categories</span>
          
          <ul class="categories-list">
            <li>
              <label class="common-customCheckbox vertical-filters-label">
                <input type="checkbox" value="Shirts" /> Shirts
                <span class="categories-num"></span>
                <div class="common-checkboxIndicator"></div>
              </label>
            </li>
            <li class="colour-listItem">
              <label class="common-customCheckbox" data-count="195">
                <span
                  data-colorhex="olive"
                  class="colour-label colour-colorDisplay"
                  style={{ backgroundColor: "rgb(61, 153, 112)" }}
                ></span>

                <input type="checkbox" value="Olive" /> Olive
                <div class="common-checkboxIndicator"></div>
              </label>
            </li>
            <li class="colour-listItem">
              <label class="common-customCheckbox" data-count="191">
                <span
                  data-colorhex="red"
                  class="colour-label colour-colorDisplay"
                  style={{ backgroundColor: "rgb(211, 75, 86)" }}
                ></span>

                <input type="checkbox" value="Red" /> Red
                <div class="common-checkboxIndicator"></div>
              </label>
            </li>
            <li class="colour-listItem">
              <label class="common-customCheckbox" data-count="179">
                <span
                  data-colorhex="grey"
                  class="colour-label colour-colorDisplay"
                  style={{ backgroundColor: "rgb(159, 168, 171)" }}
                ></span>
                <span class="colour-num"></span>
                <input type="checkbox" value="Grey" /> Grey
                <div class="common-checkboxIndicator"></div>
              </label>
            </li>
          </ul>
          <div class="colour-more">
            <span> </span>
          </div>
        </div>
        <div class="vertical-filters-filters">
          <span class="vertical-filters-header">Discount Range</span>
          <ul class="discount-list">
            <li>
              <label class="common-customRadio vertical-filters-label">
                <input
                  type="radio"
                  class="discount-input"
                  name="discount-product"
                  value="10.0 TO 100.0"
                /> 10.0 TO 100.0
                <div class="common-radioIndicator"></div>
              </label>
            </li>
            <li>
              <label class="common-customRadio vertical-filters-label">
                <input
                  type="radio"
                  class="discount-input"
                  name="discount-product"
                  value="20.0 TO 100.0"
                /> 20.0 TO 100.0
                <div class="common-radioIndicator"></div>
              </label>
            </li>
            <li>
              <label class="common-customRadio vertical-filters-label">
                <input
                  type="radio"
                  class="discount-input"
                  name="discount-product"
                  value="30.0 TO 100.0"
                /> 30.0 TO 100.0
                <div class="common-radioIndicator"></div>
              </label>
            </li>
            <li>
              <label class="common-customRadio vertical-filters-label">
                <input
                  type="radio"
                  class="discount-input"
                  name="discount-product"
                  value="40.0 TO 100.0"
                /> 40.0 TO 100.0
                <div class="common-radioIndicator"></div>
              </label>
            </li>
            <li>
              <label class="common-customRadio vertical-filters-label">
                <input
                  type="radio"
                  class="discount-input"
                  name="discount-product"
                  value="50.0 TO 100.0"
                /> 50.0 TO 100.0
                <div class="common-radioIndicator"></div>
              </label>
            </li>
            <li>
              <label class="common-customRadio vertical-filters-label">
                <input
                  type="radio"
                  class="discount-input"
                  name="discount-product"
                  value="60.0 TO 100.0"
                /> 60.0 TO 100.0
                <div class="common-radioIndicator"></div>
              </label>
            </li>
            <li>
              <label class="common-customRadio vertical-filters-label">
                <input
                  type="radio"
                  class="discount-input"
                  name="discount-product"
                  value="70.0 TO 100.0"
                /> 
                <div class="common-radioIndicator"></div>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
