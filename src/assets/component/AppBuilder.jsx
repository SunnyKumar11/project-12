import PropTypes from "prop-types";
import React, { Component } from "react";
import backgroundImage from "../img/headbackground.png";

export class AppBuilder extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        {/* <img src={backgroundImage} alt="" /> */}

        {/*  */}

        <section className=" text-gray-800">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-5xl font-bold leadi sm:text-6xl">
                Where
                <span className="text-rose-600">
                  {" "}
                  AI <br /> Build Software
                </span>
              </h1>
              <p className="mt-6 mb-8 text-xl sm:mb-12">
                #1 No-Code AI App Builder
                <br className="hidden md:inline lg:hidden" />
                <p className="text-base">
                  Generate full code source business web application (ERP / CRM
                  / HR / Accounting / Manufacturing / Inventory ) based on
                  MERN-Stack (Node.js / Express.js / React.js / MongoDB)
                </p>
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-8 py-3 text-lg font-semibold rounded bg-rose-600 text-gray-50"
                >
                  Early Access
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="px-8 py-3 text-lg font-semibold border rounded border-gray-800"
                >
                  Trial Demo
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center m-9 p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src="https://www.idurarapp.com/Theme/idurar-no-code-app/assets/img/no-code-app-builder.webp"
                alt=""
                className="object-contain h-72 sm:h-80 lg:h-screen xl:h-112 2xl:h-128"
              />
            </div>
          </div>
        </section>

        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-full px-3">
              <h1 className="text-4xl font-semibold">
                Generate Full-stack React.js Node.js App With No-Code
              </h1>
              <p className="py-6">
                Full-stack Web application based on MERN-Stack (Node.js /
                Express.js / React.js / MongoDB). in just one click
              </p>
              <div className="flex gap-y-9 justify-evenly flex-col md:flex-row">
                <img
                  src="https://www.idurarapp.com/file/manual/1174949_js_react%20js_logo_react_react%20native_icon.svg"
                  alt=""
                  className="h-24"
                />
                <img
                  src="https://www.idurarapp.com/file/manual/1269842_development_install_javascript_js_node_icon.svg"
                  alt=""
                  className="h-24"
                />
                <img
                  src="https://www.idurarapp.com/file/manual/652581_code_command_develop_javascript_language_icon.svg"
                  alt=""
                  className="h-24"
                />

                <img
                  src="https://www.idurarapp.com/file/manual/1012822_code_development_logo_mongodb_programming_icon.svg"
                  alt=""
                  className="h-24"
                />
              </div>
            </div>
          </div>
        </div>
        {/* ................................ */}

        <section className="bg-gray-100 text-gray-800">
          <div className="container px-6 py-12 mx-auto">
            <div className="grid items-center gap-4 xl:grid-cols-5">
              <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                <h2 className="text-4xl font-bold">
                  Develop and run powerful products with idurar
                </h2>
                <p className="text-gray-600">
                  IDURAR lets you create interactive, multi-user apps for
                  desktop and mobile web browsers, including all the features
                  you need to build a web application for your erp crm hr ,crud
                  app and manage a database with our intuitive, fully
                  customizable platform.
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center pt-9 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold rounded bg-rose-600 text-gray-50"
                  >
                    Early Access
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-8 py-3 text-lg font-semibold border rounded border-gray-800"
                  >
                    Trial Demo
                  </a>
                </div>
              </div>
              <div className="p-6 xl:col-span-3">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="grid content-center gap-4">
                    <div className="p-6 rounded shadow-md bg-gray-50">
                      <p>
                        An audire commodo habemus cum. Ne sed corrumpit
                        repudiandae. Tota aliquip democritum pro in, nec
                        democritum intellegam ne. Propriae volutpat dissentiet
                        ea sit, nec at lorem inani tritani, an ius populo
                        perfecto vituperatoribus. Eu cum case modus salutandi,
                        ut eum vocent sensibus reprehendunt.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src="https://source.unsplash.com/50x50/?portrait?1"
                          alt=""
                          className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                        />
                        <div>
                          <p className="text-lg font-semibold">Leroy Jenkins</p>
                          <p className="text-sm text-gray-600">
                            CTO of Company Co.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 rounded shadow-md bg-gray-50">
                      <p>
                        Sit wisi sapientem ut, pri civibus temporibus
                        voluptatibus et, ius cu hinc fabulas. Nam meliore
                        minimum et, regione convenire cum id. Ex pro eros mucius
                        consectetuer, pro magna nulla nonumy ne, eam putent
                        iudicabit consulatu cu.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src="https://source.unsplash.com/50x50/?portrait?2"
                          alt=""
                          className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                        />
                        <div>
                          <p className="text-lg font-semibold">Leroy Jenkins</p>
                          <p className="text-sm text-gray-600">
                            CTO of Company Co.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid content-center gap-4">
                    <div className="p-6 rounded shadow-md bg-gray-50">
                      <p>
                        Putant omnium elaboraret per ut. Id dicta tritani
                        nominavi quo, mea id justo errem elaboraret. Agam mollis
                        scripserit ea his, ut nec postea verear persecuti. Ea
                        noster senserit eam, ferri omittantur ei nec. Id mel
                        solet libris efficiantur, commune explicari et eos. Case
                        movet ad est, sed tota vocent appetere ea.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src="https://source.unsplash.com/50x50/?portrait?3"
                          alt=""
                          className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                        />
                        <div>
                          <p className="text-lg font-semibold">Leroy Jenkins</p>
                          <p className="text-sm text-gray-600">
                            CTO of Company Co.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 rounded shadow-md bg-gray-50">
                      <p>
                        Te omnes virtute volutpat sed. Ei esse eros interesset
                        vel, ei populo denique ocurreret vix, eu cum pertinax
                        mandamus vituperatoribus. Solum nihil luptatum per ex,
                        ei amet viderer eos. Ea illum labitur mnesarchum pro.
                        Eius meis salutandi ei nam, alterum expetenda et nec.
                        Expetenda intellegat at eum, per mazim sanctus
                        honestatis ad. Ei noluisse invenire vix. Te ancillae
                        patrioque qui, probo bonorum vivendum ex vim.
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src="https://source.unsplash.com/50x50/?portrait?4"
                          alt=""
                          className="w-12 h-12 bg-center bg-cover rounded-full bg-gray-500"
                        />
                        <div>
                          <p className="text-lg font-semibold">Leroy Jenkins</p>
                          <p className="text-sm text-gray-600">
                            CTO of Company Co.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* .................. */}

        <section className="p-6 bg-gray-100 text-gray-800">
          <div className="container p-4 mx-auto text-center">
            <h2 className="text-3xl font-semibold">
              Tutorials #React.js #Node.js #MongoDB #Javascript #NoCode #AI
            </h2>
          </div>
          <div className="container mx-auto text-gray-600">
            <div className="flex justify-center flex-col sm:flex-row items-center">
              <div className="grayscale hover:grayscale-0 flex justify-center flex-col w-full sm:w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                <img
                  className=""
                  src="https://www.idurarapp.com/file/2023/09/18/react_js_developers_create_a_email_editor_template_by_using_react_quill_4.jpg"
                  alt=""
                />
                <p className="text-xl pt-4">
                  React Js Developers Create a Email Editor with React-Quill
                </p>
              </div>
              <div className="grayscale hover:grayscale-0 flex justify-center flex-col w-full sm:w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                <img
                  src="https://www.idurarapp.com/file/2023/09/08/graphql_4.png"
                  alt=""
                />
                <p className="text-xl pt-4">
                  Next.js GraphQL Apollo Server Starter Project
                </p>
              </div>
              <div className="grayscale hover:grayscale-0 flex justify-center flex-col w-full sm:w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                <img
                  src="https://www.idurarapp.com/file/2023/09/08/pack_4.png"
                  alt=""
                />
                <p className="text-xl pt-4">
                  Best Animation packages for React.js
                </p>
              </div>
            </div>

            <div className="flex justify-center flex-col sm:flex-row items-center">
              <div className="grayscale hover:grayscale-0 flex justify-center flex-col w-full sm:w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                <img
                  src="https://www.idurarapp.com/file/2023/09/08/https_static_assets_amplication_com_blog_understanding_nodejs_streams_hero_4.png"
                  alt=""
                />
                <p className="text-xl pt-4">
                  A Guide to Node.js Streams: Advanced Functionality
                </p>
              </div>
              <div className="grayscale hover:grayscale-0 flex justify-center flex-col w-full sm:w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                <img
                  src="https://www.idurarapp.com/file/2023/09/08/javascript_4.jpg"
                  alt=""
                />
                <p className="text-xl pt-4">
                  Javascript VS TypeScript : Going Back to JavaScript and stop
                  using TypeScript
                </p>
              </div>
              <div className="grayscale hover:grayscale-0  flex justify-center flex-col w-full sm:w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                <img
                  src="https://www.idurarapp.com/file/2023/09/08/source_opne_4.png"
                  alt=""
                />
                <p className="text-xl pt-4">
                  Calling All Node.js Developers : Create Generic Upload
                  Controller Weekly Issue to Solve
                </p>
              </div>
            </div>
          </div>
        </section>
        <div>
          <h1 className="text-3xl text-blue-700 text-left p-9 font-semibold bg-slate-100">
            Our Partners
          </h1>
        </div>

        <section className="bg-slate-100 items-center py-9">
          <h1 className="text-4xl">Get Early Access Now</h1>
          <div className="pt-9 flex items-center justify-center ">
            <div>
              <input
                className="p-2 px-12 border-2 border-blue-700"
                type="text"
                placeholder="Votre Addresse Email"
              />
            </div>
            <div>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-5 text-lg font-semibold rounded bg-rose-600 text-gray-50"
              >
                Early Access
              </a>
            </div>
          </div>
        </section>

        {/* footter */}

        <footer className="footer pt-20 p-10 bg-base-300 text-base-content">
          <nav>
            <h6 className="footer-title">About</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </footer>
      </>
    );
  }
}

export default AppBuilder;
