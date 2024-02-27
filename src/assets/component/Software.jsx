import PropTypes from "prop-types";
import React, { Component } from "react";

export class Software extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <section>
          <div className="text-centre bg-white p-20 w-full">
            <h1 className="text-5xl w-full sm:w-4/6 m-auto font-bold text-blue-700">
              Open Code Source ERP CRM based on Node.js React.js
            </h1>
          </div>
        </section>
        <section className="flex  flex-col">
          <div className=" bg-white flex justify-center py-9 pb-12">
            <img
              className="h-28"
              src="https://www.idurarapp.com/file/manual/idurar-app-large.png"
              alt=""
            />
          </div>
          <div>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-5 text-lg font-semibold rounded bg-rose-600 text-gray-50"
            >
              Fork & Star On Github
            </a>
          </div>
        </section>

        <section className="text-left p-32 text-lg leading-8">
          <p>
            IDURAR is Open "Fair-Code" Source ERP / CRM (Invoice / Inventory /
            Accounting / HR) Based on Advanced Mern Stack (Node.js / Express.js
            / MongoDb / React.js ) with Ant Design (AntD) and Redux
          </p>
          <p>Dont forget to give a ⭐️ to this project ... Happy coding! 🤩</p>
        </section>

        <section>
          <img
            className="px-36 "
            src="https://www.idurarapp.com/file/manual/open-source-crm-erp.png"
            alt=""
          />
        </section>

        <div className="max-w-2xl px-6 py-16 mx-auto space-y-12 bg-gray-300 w-full">
          <article className="space-y-8 bg-gray-100 text-gray-900">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold md:tracki md:text-5xl">
                Suspendisse ut magna et ipsum sodales accumsan.
              </h1>
              <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-600">
                <div className="flex items-center md:space-x-2">
                  <img
                    src="https://source.unsplash.com/75x75/?portrait"
                    alt=""
                    className="w-4 h-4 border rounded-full bg-gray-500 border-gray-300"
                  />
                  <p className="text-sm">Leroy Jenkins • July 19th, 2021</p>
                </div>
                <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                  4 min read • 1,570 views
                </p>
              </div>
            </div>
            <div className="text-gray-800">
              <p>Insert the actual text content here...</p>
            </div>
          </article>
          <div>
            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-600">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm hover:underline bg-rose-600 text-gray-50"
              >
                #MambaUI
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm hover:underline bg-rose-600 text-gray-50"
              >
                #TailwindCSS
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm hover:underline bg-rose-600 text-gray-50"
              >
                #Angular
              </a>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Related posts</h4>
              <ul className="ml-4 space-y-1 list-disc">
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline"
                  >
                    Nunc id magna mollis
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline"
                  >
                    Duis molestie, neque eget pretium lobortis
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline"
                  >
                    Mauris nec urna volutpat, aliquam lectus sit amet
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-9 bg-slate-200">
          <img
            src="https://www.idurarapp.com/file/2024/01/18/star_history_2024117_2.png "
            alt=""
          />
        </div>

        <div className="w-full bg-gray-300 ">
          <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
            <h1 className="text-5xl antialiased font-semibold leadi text-center text-gray-700">
              Get Our Updates
            </h1>
            <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-700">
              Find out about events and other news
            </p>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="example@email.com"
                className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
              />
              <button
                type="button"
                className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-rose-600 text-gray-50"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

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

export default Software;
