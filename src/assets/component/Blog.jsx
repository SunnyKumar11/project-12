import PropTypes from "prop-types";
import React, { Component } from "react";

export class Blog extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <section>
          <div>
            <h1 className="text-5xl font-bold text-blue-700 p-20">
              IDURAR Blog
            </h1>
          </div>
        </section>

        <section className="bg-gray-100 py-9">
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

        <div className="w-full bg-gray-500">
          <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
            <h1 className="text-5xl antialiased font-semibold leadi text-center text-gray-100">
              Get Our Updates
            </h1>
            <p className="pt-2 pb-8 text-xl antialiased text-center text-gray-100">
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

export default Blog;
