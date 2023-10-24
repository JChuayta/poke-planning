import React from "react";
import "./styles.css";

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = () => {
  return (
    <div className="navbar_layout">
      <div className="HeaderPoker-module--header--6a74b">
        <div className="HeaderPoker-module--left--5113e">
          <div className="HeaderPoker-module--burger-button--b5963">
            <div className="BurgerButtonDropdown-module--wrapper--5e472">
              <button
                translate="no"
                className="BurgerButtonDropdown-module--button--2da14"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.99996 6.66666C3.26358 6.66666 2.66663 7.26361 2.66663 7.99999C2.66663 8.73637 3.26358 9.33332 3.99996 9.33332H28C28.7363 9.33332 29.3333 8.73637 29.3333 7.99999C29.3333 7.26361 28.7363 6.66666 28 6.66666H3.99996ZM2.66663 16C2.66663 15.2636 3.26358 14.6667 3.99996 14.6667H28C28.7363 14.6667 29.3333 15.2636 29.3333 16C29.3333 16.7364 28.7363 17.3333 28 17.3333H3.99996C3.26358 17.3333 2.66663 16.7364 2.66663 16ZM2.66663 24C2.66663 23.2636 3.26358 22.6667 3.99996 22.6667H28C28.7363 22.6667 29.3333 23.2636 29.3333 24C29.3333 24.7364 28.7363 25.3333 28 25.3333H3.99996C3.26358 25.3333 2.66663 24.7364 2.66663 24Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <div className="BurgerButtonDropdown-module--dropdown--be5ec BurgerButtonDropdown-module--dropdown--is-poker--7ceb5">
                <div className="BurgerButtonDropdown-module--dropdown__close--e20ef">
                  <button
                    className="ButtonIcon-module--button-icon--24589 ButtonIcon-module--color-secondary--70b04 is-clickable"
                    type="button"
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.92898 7.92893C7.53845 8.31946 7.53845 8.95262 7.92898 9.34315L13.5858 15L7.92898 20.6569C7.53845 21.0474 7.53845 21.6805 7.92898 22.0711C8.3195 22.4616 8.95267 22.4616 9.34319 22.0711L15 16.4142L20.6569 22.0711C21.0474 22.4616 21.6806 22.4616 22.0711 22.0711C22.4616 21.6805 22.4616 21.0474 22.0711 20.6569L16.4143 15L22.0711 9.34315C22.4616 8.95262 22.4616 8.31946 22.0711 7.92893C21.6806 7.53841 21.0474 7.53841 20.6569 7.92893L15 13.5858L9.34319 7.92893C8.95267 7.53841 8.3195 7.53841 7.92898 7.92893Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="BurgerButtonDropdown-module--dropdown__scroll--240c4">
                  <aside className="BurgerMenu-module--burger-menu--5fb98">
                    <div>
                      <div className="BurgerMenu-module--spacer-top--0c9de"></div>
                      <div className="BurgerMenu-module--display-name-box--61262">
                        <div className="ProfileImage-module--profile-img--16182 ProfileImage-module--profile-img--empty--a845c ProfileImage-module--profile-img--xl--1a398">
                          J
                          <button
                            type="button"
                            className="ProfileImage-module--button--b93ee"
                          >
                            <span className="ProfileImage-module--button-icon--aad44">
                              <svg
                                width="22"
                                height="20"
                                viewBox="0 0 22 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.23832 2.4453C8.42378 2.1671 8.73601 2 9.07037 2H12.9296C13.264 2 13.5762 2.1671 13.7617 2.4453L14.5742 3.6641C15.1306 4.4987 16.0673 5 17.0704 5H19C19.5523 5 20 5.44772 20 6V17C20 17.5523 19.5523 18 19 18H3C2.44772 18 2 17.5523 2 17V6C2 5.44772 2.44772 5 3 5H4.92963C5.93269 5 6.86939 4.4987 7.42578 3.6641L8.23832 2.4453ZM9.07037 0C8.06731 0 7.13061 0.501303 6.57422 1.3359L5.76168 2.5547C5.57622 2.8329 5.26399 3 4.92963 3H3C1.34315 3 0 4.34315 0 6V17C0 18.6569 1.34315 20 3 20H19C20.6569 20 22 18.6569 22 17V6C22 4.34315 20.6569 3 19 3H17.0704C16.736 3 16.4238 2.8329 16.2383 2.5547L15.4258 1.3359C14.8694 0.501303 13.9327 0 12.9296 0H9.07037ZM8 11C8 9.34315 9.34315 8 11 8C12.6569 8 14 9.34315 14 11C14 12.6569 12.6569 14 11 14C9.34315 14 8 12.6569 8 11ZM11 6C8.23858 6 6 8.23858 6 11C6 13.7614 8.23858 16 11 16C13.7614 16 16 13.7614 16 11C16 8.23858 13.7614 6 11 6Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div className="HoritzontalSpacing-module--horitzontal-spacer--9013a HoritzontalSpacing-module--horitzontal-spacer--spacing-m--c4674"></div>
                        <div>
                          <div className="BurgerMenu-module--display-name--08f51">
                            <span className="BurgerMenu-module--display-name-value--a1b75">
                              Jc
                            </span>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18.5335 2.30863C18.3362 2.11104 18.0685 2 17.7893 2C17.5101 2 17.2423 2.11104 17.0451 2.30863L3.36096 15.9929C3.22629 16.1277 3.13063 16.2965 3.08412 16.4813L2.03149 20.6919C1.94178 21.0505 2.04674 21.4299 2.30802 21.6914C2.5693 21.9529 2.9486 22.0581 3.30728 21.9687L7.51778 20.9161C7.70304 20.8698 7.87251 20.774 8.00725 20.6392L21.6914 6.95497C21.889 6.75771 22 6.48996 22 6.21076C22 5.93155 21.889 5.6638 21.6914 5.46654L18.5335 2.30863ZM6.7241 18.9445L4.49885 19.5003L5.05569 17.275L14.6314 7.69918L16.3009 9.36866L6.7241 18.9445ZM17.7893 7.88024L16.1198 6.21076L17.7893 4.54128L19.4588 6.21076L17.7893 7.88024Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                          <div className="BurgerMenu-module--display-name-label-wrapper--57820">
                            <span className="BurgerMenu-module--display-name-label--64dff">
                              Guest user
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="BurgerMenu-module--actions--15a7b">
                        <button
                          className="Button-module--button--1b645 Button-module--style-primary--eec70 Button-module--color-primary--bb7ea Button-module--is-block--641e6 is-clickable"
                          type="button"
                        >
                          <span className="Button-module--content--85ef4 is-clickable">
                            <span className="Button-module--label--e4390 is-clickable">
                              Start free trial
                            </span>
                          </span>
                        </button>
                        <div className="VerticalSpacing-module--vertical-spacer--spacing-m--d41da"></div>
                        <button
                          className="Button-module--button--1b645 Button-module--style-secondary--4f694 Button-module--color-primary--bb7ea Button-module--is-block--641e6 is-clickable"
                          type="button"
                        >
                          <span className="Button-module--content--85ef4 is-clickable">
                            <span className="Button-module--icon-elemnent--78b8a is-clickable">
                              <svg
                                width="26"
                                height="24"
                                viewBox="0 0 26 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M21.2929 18.0752C21.2929 18.586 20.8789 19 20.3681 19C19.8574 19 19.4433 18.586 19.4433 18.0752V17.3C19.4433 14.0198 16.5385 11.35 12.9697 11.35C9.39995 11.35 6.49607 14.0198 6.49607 17.3V18.0752C6.49607 18.586 6.08202 19 5.57127 19C5.06051 19 4.64646 18.586 4.64646 18.0752V17.3C4.64646 14.144 6.73744 11.4291 9.71254 10.2612C8.5963 9.40265 7.88327 8.11405 7.88327 6.675C7.88633 4.09423 10.1618 2.00281 12.9697 2C15.7737 2 18.0561 4.0978 18.0561 6.675C18.0557 8.06067 17.3855 9.37454 16.2269 10.2612C19.2019 11.4291 21.2929 14.1431 21.2929 17.3V18.0752ZM12.9697 3.7C11.1848 3.7 9.73288 5.0345 9.73288 6.675C9.73288 8.3155 11.1848 9.65 12.9697 9.65C14.7546 9.65 16.2065 8.3155 16.2065 6.675C16.2065 5.0345 14.7546 3.7 12.9697 3.7ZM11.9917 15.0612C11.9917 14.4751 12.4668 14 13.0529 14C13.639 14 14.1141 14.4751 14.1141 15.0612V17H16.2978C16.8501 17 17.2978 17.4477 17.2978 18C17.2978 18.5523 16.8501 19 16.2978 19H14.1141V20.9388C14.1141 21.5249 13.639 22 13.0529 22C12.4668 22 11.9917 21.5249 11.9917 20.9388V19H9.80808C9.25579 19 8.80808 18.5523 8.80808 18C8.80808 17.4477 9.25579 17 9.80808 17H11.9917V15.0612Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </span>
                            <span className="Button-module--label--e4390 Button-module--label--icon--f8d93 is-clickable">
                              Invite players
                            </span>
                          </span>
                        </button>
                      </div>
                      <div className="BurgerMenuItem-module--item--09566">
                        <span className="BurgerMenuItem-module--icon--b14d8">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.1752 0.741078C10.3181 0.207612 10.8665 -0.10897 11.3999 0.0339714L22.991 3.1398C23.5245 3.28274 23.8411 3.83108 23.6981 4.36454L19.557 19.8194C19.4141 20.3528 18.8658 20.6694 18.3323 20.5265L16.2399 19.9658C15.7065 19.8229 15.3899 19.2745 15.5328 18.7411C15.6758 18.2076 16.2241 17.891 16.7576 18.034L17.884 18.3358L21.5075 4.81283L11.8482 2.22464L11.4659 3.65136C11.323 4.18482 10.7746 4.5014 10.2412 4.35846C9.70771 4.21552 9.39113 3.66718 9.53407 3.13372L10.1752 0.741078ZM0 7.00001C0 6.44772 0.447715 6.00001 1 6.00001H13C13.5523 6.00001 14 6.44772 14 7.00001V23C14 23.5523 13.5523 24 13 24H1C0.447715 24 0 23.5523 0 23V7.00001ZM2 8.00001V22H12V8.00001H2ZM7.00009 18L9.55894 15.4932C10.1473 14.9164 10.147 14.0108 9.55819 13.431C8.98939 12.8764 8.02431 12.8749 7.45476 13.4318L7.26641 13.6163C7.19582 13.6856 7.10001 13.7245 7.00009 13.7245C6.90018 13.7245 6.80437 13.6856 6.73377 13.6163L6.54543 13.4318C6.26141 13.1535 5.88848 13 5.49484 13C5.1012 13 4.72677 13.1535 4.44049 13.4325C3.85323 14.0108 3.85286 14.9164 4.44124 15.4932L7.00009 18Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span>My games</span>
                        <div className="BurgerMenuItem-module--right--ef6af">
                          <div>
                            <div className="ProBadge-module--pro-badge--f85cd">
                              PRO
                            </div>
                            <div className="HoritzontalSpacing-module--horitzontal-spacer--9013a HoritzontalSpacing-module--horitzontal-spacer--spacing-s--6f346"></div>
                          </div>
                        </div>
                      </div>
                      <div className="BurgerMenuItem-module--item--09566">
                        <span className="BurgerMenuItem-module--icon--b14d8">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 17C9.07898 17 6.02598 15.4231 3.26641 12C6.02598 8.57692 9.07898 7 12 7C14.921 7 17.974 8.57692 20.7336 12C17.974 15.4231 14.921 17 12 17ZM22.8 11.4C19.6794 7.23922 15.9134 5 12 5C8.08661 5 4.32058 7.23922 1.2 11.4L0.75 12L1.2 12.6C4.32058 16.7608 8.08661 19 12 19C15.9134 19 19.6794 16.7608 22.8 12.6L23.25 12L22.8 11.4ZM12 8C9.79691 8.01454 8.01454 9.79691 8 12C8 14.1893 9.81067 16 12 16C14.188 16 16 14.1893 16 12C16 11.5914 15.9368 11.1959 15.8198 10.8229C15.5026 11.5137 14.8018 12 14 12C12.9053 12 12 11.0947 12 10C12.0053 9.19139 12.487 8.49613 13.1785 8.18066C12.8051 8.06335 12.4091 8 12 8Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span>Spectator mode</span>
                        <div className="BurgerMenuItem-module--right--ef6af">
                          <div>
                            <button
                              type="button"
                              className="Switch-module--switch--eb58f"
                            >
                              <div className="Switch-module--ball--73eac"></div>
                            </button>
                            <div className="HoritzontalSpacing-module--horitzontal-spacer--9013a HoritzontalSpacing-module--horitzontal-spacer--spacing-xxs--55bf7"></div>
                          </div>
                        </div>
                      </div>
                      <div className="BurgerMenuItem-module--item--09566">
                        <span className="BurgerMenuItem-module--icon--b14d8">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.732 2C12.9622 0.666667 11.0377 0.666666 10.2679 2L6.80385 8C6.03405 9.33333 6.9963 11 8.5359 11H15.4641C17.0037 11 17.966 9.33333 17.1962 8L13.732 2ZM8.5359 9L12 3L15.4641 9H8.5359ZM6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15ZM1 18C1 15.2386 3.23858 13 6 13C8.76142 13 11 15.2386 11 18C11 20.7614 8.76142 23 6 23C3.23858 23 1 20.7614 1 18ZM13 15C13 13.8954 13.8954 13 15 13H21C22.1046 13 23 13.8954 23 15V21C23 22.1046 22.1046 23 21 23H15C13.8954 23 13 22.1046 13 21V15ZM21 15H15V21H21V15Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span>Fun features</span>
                        <div className="BurgerMenuItem-module--right--ef6af">
                          <div>
                            <button
                              type="button"
                              className="Switch-module--switch--eb58f"
                            >
                              <div className="Switch-module--ball--73eac"></div>
                            </button>
                            <div className="HoritzontalSpacing-module--horitzontal-spacer--9013a HoritzontalSpacing-module--horitzontal-spacer--spacing-xxs--55bf7"></div>
                          </div>
                        </div>
                      </div>
                      <div className="BurgerMenu-module--divider--7afb2"></div>
                      <div className="BurgerMenuItem-module--item--09566">
                        <span className="BurgerMenuItem-module--icon--b14d8">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.243592 12.512C0.175592 12.768 0.211592 13.041 0.343592 13.271L2.34359 16.731C2.61959 17.208 3.23259 17.372 3.70959 17.097L5.10559 16.291C5.68559 16.748 6.32659 17.123 7.00059 17.403V19C7.00059 19.5523 7.44831 20 8.00059 20H12.0006C12.5529 20 13.0006 19.5523 13.0006 19V17.402C13.6799 17.1192 14.3174 16.7451 14.8956 16.29L16.2916 17.096C16.7701 17.3704 17.3804 17.2069 17.6576 16.73L19.6576 13.27C19.7896 13.041 19.8256 12.768 19.7576 12.511C19.6896 12.254 19.5216 12.036 19.2916 11.904L17.9206 11.112C18.0278 10.3745 18.0271 9.62531 17.9186 8.888L19.2896 8.096C19.7669 7.81912 19.9305 7.20844 19.6556 6.73L17.6556 3.27C17.3791 2.79221 16.768 2.62846 16.2896 2.904L14.8936 3.71C14.3161 3.25438 13.6789 2.88022 12.9996 2.598V1C12.9996 0.447715 12.5519 0 11.9996 0H7.99959C7.44731 0 6.99959 0.447715 6.99959 1V2.598C6.32032 2.88081 5.68278 3.25492 5.10459 3.71L3.70959 2.904C3.23131 2.62787 2.61974 2.79173 2.34359 3.27L0.343592 6.73C0.211592 6.959 0.175592 7.232 0.243592 7.489C0.311592 7.746 0.479592 7.963 0.709592 8.096L2.08059 8.888C1.97273 9.62541 1.97273 10.3746 2.08059 11.112L0.709592 11.904C0.479714 12.0368 0.312065 12.2555 0.243592 12.512ZM4.16959 11.378C4.05759 10.925 3.99959 10.461 3.99959 10C3.99959 9.539 4.05759 9.075 4.16959 8.622C4.27795 8.18915 4.08612 7.73692 3.69959 7.514L2.57559 6.864L3.57459 5.135L4.71959 5.796C5.103 6.01786 5.58677 5.96044 5.90759 5.655C6.58359 5.01086 7.39957 4.53202 8.29159 4.256C8.71248 4.12818 9.00006 3.73987 8.99959 3.3V2H10.9996V3.3C10.9993 3.74003 11.2867 4.12851 11.7076 4.257C12.5996 4.53302 13.4156 5.01186 14.0916 5.656C14.4127 5.96081 14.896 6.01818 15.2796 5.797L16.4246 5.136L17.4236 6.865L16.2996 7.514C15.9131 7.73692 15.7212 8.18915 15.8296 8.622C15.9416 9.075 15.9996 9.539 15.9996 10C15.9996 10.461 15.9416 10.925 15.8296 11.378C15.7212 11.8109 15.9131 12.2631 16.2996 12.486L17.4236 13.136L16.4246 14.865L15.2796 14.204C14.8962 13.9821 14.4124 14.0396 14.0916 14.345C13.4156 14.9891 12.5996 15.468 11.7076 15.744C11.2867 15.8718 10.9991 16.2601 10.9996 16.7V18H8.99959V16.7C8.99985 16.26 8.71244 15.8715 8.29159 15.743C7.39957 15.467 6.58359 14.9881 5.90759 14.344C5.58647 14.0392 5.10314 13.9818 4.71959 14.203L3.57459 14.864L2.57559 13.135L3.69959 12.485C4.08623 12.2627 4.27817 11.8106 4.16959 11.378ZM9.99959 14C12.2056 14 13.9996 12.206 13.9996 10C13.9996 7.794 12.2056 6 9.99959 6C7.79359 6 5.99959 7.794 5.99959 10C5.99959 12.206 7.79359 14 9.99959 14ZM9.99959 8C11.0836 8 11.9996 8.916 11.9996 10C11.9996 11.084 11.0836 12 9.99959 12C8.91559 12 7.99959 11.084 7.99959 10C7.99959 8.916 8.91559 8 9.99959 8Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span>Current game settings</span>
                        <div className="HoritzontalSpacing-module--horitzontal-spacer--9013a HoritzontalSpacing-module--horitzontal-spacer--spacing-l--8dbf0"></div>
                      </div>
                      <div className="BurgerMenu-module--divider--7afb2"></div>
                      <div className="BurgerMenuItem-module--item--09566">
                        <span className="BurgerMenuItem-module--icon--b14d8">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.0667 18.8889L19.0667 1.11111C19.0667 0.49746 18.5593 0 17.9333 0H11.1111C10.4975 0 10 0.49746 10 1.11111C10 1.72476 10.4975 2.22222 11.1111 2.22222L16.8 2.22222L16.8 17.7778H11.1111C10.4975 17.7778 10 18.2752 10 18.8889C10 19.5025 10.4975 20 11.1111 20L17.9333 20C18.5593 20 19.0667 19.5025 19.0667 18.8889ZM0 10C0 9.44771 0.447715 9 1 9H9.27205L6.63604 6.364C6.24552 5.97347 6.24552 5.34031 6.63604 4.94978C7.02657 4.55926 7.65973 4.55926 8.05026 4.94978L12.3934 9.29293C12.7839 9.68345 12.7839 10.3166 12.3934 10.7071L8.05026 15.0503C7.65973 15.4408 7.02657 15.4408 6.63604 15.0503C6.24552 14.6598 6.24552 14.0266 6.63604 13.6361L9.27212 11H1C0.447715 11 0 10.5523 0 10Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span>Login</span>
                        <div className="HoritzontalSpacing-module--horitzontal-spacer--9013a HoritzontalSpacing-module--horitzontal-spacer--spacing-l--8dbf0"></div>
                      </div>
                      <div className="BurgerMenuItem-module--item--09566">
                        <span className="BurgerMenuItem-module--icon--b14d8">
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8ZM13 5C13 6.48042 12.3566 7.81056 11.3342 8.72607C11.7693 8.92577 12.1833 9.16333 12.5721 9.4345C13.0251 9.75046 13.1361 10.3738 12.8202 10.8268C12.5042 11.2798 11.8809 11.3908 11.4279 11.0749C10.4564 10.3973 9.27611 10 8 10C4.68629 10 2 12.6863 2 16C2 16.5523 1.55228 17 1 17C0.447715 17 0 16.5523 0 16C0 12.7718 1.91213 9.99012 4.66559 8.72588C3.6433 7.81038 3 6.48032 3 5C3 2.23858 5.23858 0 8 0C10.7614 0 13 2.23858 13 5ZM23.435 20.6067C24.6066 19.4351 24.6066 17.5356 23.435 16.364L19.5394 12.4684C18.938 11.867 18.1097 11.5492 17.2604 11.5939L14.5734 11.7353C13.0406 11.8159 11.8159 13.0406 11.7352 14.5734L11.5938 17.2605C11.5491 18.1097 11.8669 18.9381 12.4683 19.5395L16.364 23.4351C17.5355 24.6067 19.435 24.6067 20.6066 23.4351L23.435 20.6067ZM22.0208 17.7782C22.4113 18.1688 22.4113 18.8019 22.0208 19.1925L19.1924 22.0209C18.8019 22.4114 18.1687 22.4114 17.7782 22.0209L13.8825 18.1252C13.6821 17.9248 13.5761 17.6487 13.591 17.3656L13.7324 14.6786C13.7593 14.1676 14.1676 13.7594 14.6785 13.7325L17.3655 13.5911C17.6486 13.5762 17.9247 13.6821 18.1252 13.8826L22.0208 17.7782ZM16 17C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15C15.4477 15 15 15.4477 15 16C15 16.5523 15.4477 17 16 17Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span>Sign up</span>
                        <div className="HoritzontalSpacing-module--horitzontal-spacer--9013a HoritzontalSpacing-module--horitzontal-spacer--spacing-l--8dbf0"></div>
                      </div>
                      <div className="BurgerMenu-module--divider--7afb2"></div>
                      <div className="BurgerMenuItem-module--item--09566">
                        <span className="BurgerMenuItem-module--icon--b14d8">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2C6.486 2 2 5.54082 2 9.89422C2 12.7804 3.982 15.5296 7 16.9232V20.9461C6.99911 21.3723 7.24267 21.7569 7.61673 21.9199C7.99078 22.083 8.42136 21.9923 8.707 21.6903L12.421 17.7811C17.74 17.6064 22 14.135 22 9.89422C22 5.54082 17.514 2 12 2ZM12 15.6833C11.7347 15.6829 11.4802 15.7939 11.293 15.9917L9 18.4052V16.2096C8.99979 15.7652 8.73448 15.3689 8.337 15.2191C5.743 14.2403 4 12.1004 4 9.89422C4 6.70285 7.589 4.10513 12 4.10513C16.411 4.10513 20 6.70285 20 9.89422C20 13.0856 16.411 15.6833 12 15.6833ZM8 8C8 7.44772 8.44772 7 9 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H9C8.44772 9 8 8.55228 8 8ZM9 10C8.44772 10 8 10.4477 8 11C8 11.5523 8.44772 12 9 12H13C13.5523 12 14 11.5523 14 11C14 10.4477 13.5523 10 13 10H9Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span>Contact us</span>
                        <div className="HoritzontalSpacing-module--horitzontal-spacer--9013a HoritzontalSpacing-module--horitzontal-spacer--spacing-l--8dbf0"></div>
                      </div>
                      <a
                        className="BurgerMenu-module--item-link--289e2"
                        href="/legal-notice"
                        target="_blank"
                      >
                        <div className="BurgerMenuItem-module--item--09566">
                          <span className="BurgerMenuItem-module--icon--b14d8">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.1429 3.55392C17.4216 3.55392 17.6991 3.54794 17.9752 3.53611C17.9917 3.82539 18 4.11699 18 4.41072C18 10.1878 14.7648 15.2131 10 17.7669C5.2352 15.2131 2 10.1878 2 4.41072C2 4.11699 2.00834 3.82539 2.02478 3.53611C2.30086 3.54795 2.57835 3.55392 2.85714 3.55392C5.37883 3.55392 7.79069 3.06531 10 2.17627C12.2093 3.06531 14.6212 3.55392 17.1429 3.55392ZM17.1429 1.55392C18.0221 1.55392 18.8858 1.48773 19.7294 1.36007C19.7846 1.66752 19.8316 1.97781 19.8702 2.29071C19.9132 2.63957 19.9458 2.99168 19.9675 3.3467C19.9891 3.69861 20 4.05339 20 4.41072C20 11.3293 15.9015 17.2906 10 19.9992C4.09849 17.2906 0 11.3293 0 4.41072C0 4.05339 0.0109329 3.69861 0.0324824 3.3467C0.0542236 2.99166 0.0867713 2.63954 0.129801 2.29067C0.168392 1.97778 0.215414 1.6675 0.270633 1.36007C1.1142 1.48773 1.97794 1.55392 2.85714 1.55392C5.40633 1.55392 7.82555 0.997509 10 -0.000488281C12.1744 0.997508 14.5937 1.55392 17.1429 1.55392ZM14.7809 7.62473C15.1259 7.19347 15.056 6.56418 14.6247 6.21917C14.1934 5.87416 13.5641 5.94408 13.2191 6.37534L9.91708 10.5029L7.70711 8.29293C7.31658 7.90241 6.68342 7.90241 6.29289 8.29293C5.90237 8.68345 5.90237 9.31662 6.29289 9.70714L9.29289 12.7071C9.49403 12.9083 9.77129 13.0142 10.0553 12.9985C10.3393 12.9828 10.6032 12.8468 10.7809 12.6247L14.7809 7.62473Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                          <span>Legal notice</span>
                          <div className="HoritzontalSpacing-module--horitzontal-spacer--9013a HoritzontalSpacing-module--horitzontal-spacer--spacing-l--8dbf0"></div>
                        </div>
                      </a>
                      <a
                        className="BurgerMenu-module--item-link--289e2"
                        href="/faqs"
                      >
                        <div className="BurgerMenuItem-module--item--09566">
                          <span className="BurgerMenuItem-module--icon--b14d8">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM19.411 9H16V9.031C15.7082 8.63915 15.3609 8.29184 14.969 8H15V4.589C17.0041 5.40567 18.5943 6.99588 19.411 9ZM12 15C10.346 15 9 13.654 9 12C9 10.346 10.346 9 12 9C13.654 9 15 10.346 15 12C15 13.654 13.654 15 12 15ZM13 4.069V7.101C12.3402 6.96598 11.6598 6.96598 11 7.101V4.069C11.328 4.028 11.66 4 12 4C12.34 4 12.672 4.028 13 4.069ZM9 4.589V8H9.031C8.63915 8.29184 8.29184 8.63915 8 9.031V9H4.589C5.402 7 6.999 5.402 9 4.589ZM4.069 11H7.101C6.9665 11.6599 6.96684 12.3402 7.102 13H4.069C4.028 12.672 4 12.339 4 12C4 11.661 4.028 11.328 4.069 11ZM4.589 15H8V14.969C8.284 15.35 8.621 15.687 9 15.974V19.411C6.99588 18.5943 5.40567 17.0041 4.589 15ZM11 19.931V16.899C11.6598 17.034 12.3402 17.034 13 16.899V19.931C12.672 19.972 12.34 20 12 20C11.66 20 11.328 19.972 11 19.931ZM15 19.411V15.974C15.379 15.6878 15.7157 15.3495 16 14.969V15H19.411C18.5943 17.0041 17.0041 18.5943 15 19.411ZM19.931 13H16.899C17.0335 12.3401 17.0332 11.6598 16.898 11H19.93C19.972 11.328 20 11.661 20 12C20 12.339 19.972 12.672 19.931 13Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </span>
                          <span>FAQs</span>
                          <div className="HoritzontalSpacing-module--horitzontal-spacer--9013a HoritzontalSpacing-module--horitzontal-spacer--spacing-l--8dbf0"></div>
                        </div>
                      </a>
                      <div className="BurgerMenu-module--divider--7afb2"></div>
                      <a className="Link-module--link--d14ef" href="/">
                        <div className="BurgerMenuItem-module--item--09566">
                          <span className="BurgerMenuItem-module--icon--b14d8">
                            <svg
                              className=""
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.4205 2.01261C20.6381 1.22316 19.362 1.22316 18.5796 2.0126L8.28444 12.3996C8.28431 12.3997 8.28431 12.3999 8.28444 12.4C8.28457 12.4002 8.28457 12.4004 8.28444 12.4005L2.42625 18.311C-0.808993 21.5751 -0.808993 26.8672 2.42625 30.1313C5.66149 33.3954 10.9068 33.3954 14.1421 30.1313L16.3064 27.9477C16.3036 27.9328 16.301 27.9179 16.2986 27.9029L15.9414 25.7152L11.7673 26.4456C11.3674 26.5156 11.0011 26.2079 11.0011 25.8019C11.0011 24.0958 11.8335 22.497 13.2312 21.5187L15.0486 20.2465L14.7169 18.215C14.2717 15.4882 15.265 12.7247 17.3443 10.9053L18.6841 9.73306C19.4381 9.07326 20.564 9.07326 21.3181 9.73306L22.6578 10.9053C24.7371 12.7247 25.7305 15.4882 25.2853 18.215L24.9536 20.2465L26.771 21.5187C28.1687 22.497 29.0011 24.0958 29.0011 25.8019C29.0011 26.2079 28.6348 26.5156 28.2349 26.4456L24.0608 25.7152L23.7036 27.9029C23.7021 27.9118 23.7006 27.9207 23.699 27.9295C23.6979 27.9359 23.6968 27.9423 23.6956 27.9487L25.858 30.1303C29.0932 33.3944 34.3386 33.3944 37.5738 30.1303C40.809 26.8662 40.809 21.5741 37.5738 18.31L21.4205 2.01261ZM20.0004 19.0797C21.3811 19.0797 22.5004 17.9604 22.5004 16.5797C22.5004 15.199 21.3811 14.0797 20.0004 14.0797C18.6197 14.0797 17.5004 15.199 17.5004 16.5797C17.5004 17.9604 18.6197 19.0797 20.0004 19.0797ZM27.4997 38.5794H12.4993C12.1855 38.1616 11.9995 37.6422 11.9995 37.0794C11.9995 35.6987 13.1188 34.5794 14.4995 34.5794C15.0751 34.5794 15.6053 34.7739 16.0279 35.1008C16.2644 33.1173 17.9523 31.5794 19.9995 31.5794C22.0467 31.5794 23.7347 33.1173 23.9712 35.1008C24.3937 34.7739 24.9239 34.5794 25.4995 34.5794C26.8802 34.5794 27.9995 35.6987 27.9995 37.0794C27.9995 37.6422 27.8135 38.1616 27.4997 38.5794Z"
                                fill="#a8aeb2"
                              ></path>
                            </svg>
                          </span>
                          <span>Go to home page</span>
                          <div className="HoritzontalSpacing-module--horitzontal-spacer--9013a HoritzontalSpacing-module--horitzontal-spacer--spacing-l--8dbf0"></div>
                        </div>
                      </a>
                      <div className="BurgerMenuItem-module--item--09566">
                        <span className="BurgerMenuItem-module--icon--b14d8">
                          <svg
                            width="17"
                            height="20"
                            viewBox="0 0 17 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 1.11111V18.8889C0 19.5025 0.507411 20 1.13333 20H7.95556C8.56921 20 9.06667 19.5025 9.06667 18.8889C9.06667 18.2752 8.56921 17.7778 7.95556 17.7778H2.26667V2.22222H7.95556C8.56921 2.22222 9.06667 1.72476 9.06667 1.11111C9.06667 0.497462 8.56921 0 7.95556 0H1.13333C0.507411 0 0 0.497461 0 1.11111ZM4 10C4 9.44771 4.44772 9 5 9H13.2721L10.636 6.36396C10.2455 5.97343 10.2455 5.34027 10.636 4.94974C11.0266 4.55922 11.6597 4.55922 12.0503 4.94974L16.3934 9.29289C16.7839 9.68342 16.7839 10.3166 16.3934 10.7071L12.0503 15.0503C11.6597 15.4408 11.0266 15.4408 10.636 15.0503C10.2455 14.6597 10.2455 14.0266 10.636 13.636L13.2721 11H5C4.44771 11 4 10.5523 4 10Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span>Sign out</span>
                        <div className="HoritzontalSpacing-module--horitzontal-spacer--9013a HoritzontalSpacing-module--horitzontal-spacer--spacing-l--8dbf0"></div>
                      </div>
                      <div className="BurgerMenu-module--spacer-bottom--cbe50 BurgerMenu-module--spacer-bottom--poker--79eea"></div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          <a
            className="Link-module--link--d14ef HeaderPoker-module--logo-link--b5094"
            href="/"
          >
            <svg
              className="HeaderPoker-module--logo-icon--a3515"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.4205 2.01261C20.6381 1.22316 19.362 1.22316 18.5796 2.0126L8.28444 12.3996C8.28431 12.3997 8.28431 12.3999 8.28444 12.4C8.28457 12.4002 8.28457 12.4004 8.28444 12.4005L2.42625 18.311C-0.808993 21.5751 -0.808993 26.8672 2.42625 30.1313C5.66149 33.3954 10.9068 33.3954 14.1421 30.1313L16.3064 27.9477C16.3036 27.9328 16.301 27.9179 16.2986 27.9029L15.9414 25.7152L11.7673 26.4456C11.3674 26.5156 11.0011 26.2079 11.0011 25.8019C11.0011 24.0958 11.8335 22.497 13.2312 21.5187L15.0486 20.2465L14.7169 18.215C14.2717 15.4882 15.265 12.7247 17.3443 10.9053L18.6841 9.73306C19.4381 9.07326 20.564 9.07326 21.3181 9.73306L22.6578 10.9053C24.7371 12.7247 25.7305 15.4882 25.2853 18.215L24.9536 20.2465L26.771 21.5187C28.1687 22.497 29.0011 24.0958 29.0011 25.8019C29.0011 26.2079 28.6348 26.5156 28.2349 26.4456L24.0608 25.7152L23.7036 27.9029C23.7021 27.9118 23.7006 27.9207 23.699 27.9295C23.6979 27.9359 23.6968 27.9423 23.6956 27.9487L25.858 30.1303C29.0932 33.3944 34.3386 33.3944 37.5738 30.1303C40.809 26.8662 40.809 21.5741 37.5738 18.31L21.4205 2.01261ZM20.0004 19.0797C21.3811 19.0797 22.5004 17.9604 22.5004 16.5797C22.5004 15.199 21.3811 14.0797 20.0004 14.0797C18.6197 14.0797 17.5004 15.199 17.5004 16.5797C17.5004 17.9604 18.6197 19.0797 20.0004 19.0797ZM27.4997 38.5794H12.4993C12.1855 38.1616 11.9995 37.6422 11.9995 37.0794C11.9995 35.6987 13.1188 34.5794 14.4995 34.5794C15.0751 34.5794 15.6053 34.7739 16.0279 35.1008C16.2644 33.1173 17.9523 31.5794 19.9995 31.5794C22.0467 31.5794 23.7347 33.1173 23.9712 35.1008C24.3937 34.7739 24.9239 34.5794 25.4995 34.5794C26.8802 34.5794 27.9995 35.6987 27.9995 37.0794C27.9995 37.6422 27.8135 38.1616 27.4997 38.5794Z"
                fill="#3993FF"
              ></path>
            </svg>
          </a>
        </div>
        <div className="HeaderPoker-module--middle--80875">
          <div className="HeaderPoker-module--game-name-container--a052c">
            <div className="ButtonDropdown-module--wrapper--9e246">
              <button
                data-test="button-dropdown-game-title"
                className="HeaderPoker-module--game-name--114ce ButtonDropdown-module--button--702f9"
              >
                <span data-test="span-game-title-header">prueba</span>
                <div className="ButtonDropdown-module--chevron--5c034">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.66699 5.33329L7.84794 10.6666L13.3337 5.33329"
                      stroke="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="HeaderPoker-module--right--e69e1">
          <div className="HeaderPoker-module--auth-button--9abea">
            <div className="ButtonDropdown-module--wrapper--9e246">
              <button
                translate="no"
                className="ButtonDropdown-module--button--702f9"
              >
                <span className="AuthButton-module--display-name-picture--a82a9">
                  <div className="ProfileImage-module--profile-img--16182 ProfileImage-module--profile-img--empty--a845c ProfileImage-module--profile-img--m--e1966">
                    J
                  </div>
                </span>
                <span
                  className="AuthButton-module--name--e6098"
                  data-test="span-user-name-auth-button"
                >
                  Jc
                </span>
                <div className="ButtonDropdown-module--chevron--5c034">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.66699 5.33329L7.84794 10.6666L13.3337 5.33329"
                      stroke="currentColor"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="HeaderPoker-module--header-actions--6b0cc">
            <div className="HeaderPoker-module--header-action--e7519 HeaderPoker-module--invite-players--d34d3">
              <button
                className="Button-module--button--1b645 Button-module--style-secondary--4f694 Button-module--color-primary--bb7ea is-clickable"
                type="button"
              >
                <span className="Button-module--content--85ef4 is-clickable">
                  <span className="Button-module--icon-elemnent--78b8a is-clickable">
                    <svg
                      width="26"
                      height="24"
                      viewBox="0 0 26 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.2929 18.0752C21.2929 18.586 20.8789 19 20.3681 19C19.8574 19 19.4433 18.586 19.4433 18.0752V17.3C19.4433 14.0198 16.5385 11.35 12.9697 11.35C9.39995 11.35 6.49607 14.0198 6.49607 17.3V18.0752C6.49607 18.586 6.08202 19 5.57127 19C5.06051 19 4.64646 18.586 4.64646 18.0752V17.3C4.64646 14.144 6.73744 11.4291 9.71254 10.2612C8.5963 9.40265 7.88327 8.11405 7.88327 6.675C7.88633 4.09423 10.1618 2.00281 12.9697 2C15.7737 2 18.0561 4.0978 18.0561 6.675C18.0557 8.06067 17.3855 9.37454 16.2269 10.2612C19.2019 11.4291 21.2929 14.1431 21.2929 17.3V18.0752ZM12.9697 3.7C11.1848 3.7 9.73288 5.0345 9.73288 6.675C9.73288 8.3155 11.1848 9.65 12.9697 9.65C14.7546 9.65 16.2065 8.3155 16.2065 6.675C16.2065 5.0345 14.7546 3.7 12.9697 3.7ZM11.9917 15.0612C11.9917 14.4751 12.4668 14 13.0529 14C13.639 14 14.1141 14.4751 14.1141 15.0612V17H16.2978C16.8501 17 17.2978 17.4477 17.2978 18C17.2978 18.5523 16.8501 19 16.2978 19H14.1141V20.9388C14.1141 21.5249 13.639 22 13.0529 22C12.4668 22 11.9917 21.5249 11.9917 20.9388V19H9.80808C9.25579 19 8.80808 18.5523 8.80808 18C8.80808 17.4477 9.25579 17 9.80808 17H11.9917V15.0612Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    x
                  </span>
                  <span className="Button-module--label--e4390 Button-module--label--icon--f8d93 is-clickable">
                    <span>Invite players</span>
                  </span>
                </span>
              </button>
            </div>
            <div className="HeaderPoker-module--header-action--e7519">
              <button
                className="Button-module--button--1b645 Button-module--style-secondary--4f694 Button-module--color-primary--bb7ea is-clickable"
                type="button"
              >
                <span className="Button-module--content--85ef4 is-clickable">
                  <span className="Button-module--icon-elemnent--78b8a is-clickable">
                    <svg
                      width="22"
                      height="18"
                      viewBox="0 0 22 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 3C0 1.34315 1.34315 0 3 0H15C16.6569 0 18 1.34315 18 3H16C16 2.44772 15.5523 2 15 2H3C2.44772 2 2 2.44772 2 3V11C2 11.5523 2.44772 12 3 12V14C1.34315 14 0 12.6569 0 11V3ZM4 7C4 5.34315 5.34315 4 7 4H19C20.6569 4 22 5.34315 22 7V15C22 16.6569 20.6569 18 19 18H7C5.34315 18 4 16.6569 4 15V7ZM7 6C6.44772 6 6 6.44772 6 7V15C6 15.5523 6.44772 16 7 16H19C19.5523 16 20 15.5523 20 15V7C20 6.44772 19.5523 6 19 6H7ZM9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10H17C17.5523 10 18 9.55228 18 9C18 8.44772 17.5523 8 17 8H9ZM9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14H13C13.5523 14 14 13.5523 14 13C14 12.4477 13.5523 12 13 12H9Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
