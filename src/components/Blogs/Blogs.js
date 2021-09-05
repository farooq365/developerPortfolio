import React from 'react';
import Footer from '../Shared/Footer/Footer';
import './Blog.css';

const Blogs = () => {
    return (
        <div>
            <h3 className="text-center mt-5">Visit My Blog: <a href="http://honestschool.me">Honest School</a></h3>
            <div id="content-list">
                <div>
                    <ol>
                        <li><a href="https://honestschool.me/a-complete-website-project-react-js-node-express-mongodb/">A complete website project – React js, node, express, mongoDB</a></li>
                        <li><a href="https://90daycode.blogspot.com/2021/09/journey-start-to-become-web-developer.html">Start Journey to Web Developer, Learn HTML- Day 1</a></li>
                        <li><a href="https://90daycode.blogspot.com/2021/09/learn-css-as-beginner-day-2-90-day-code.html">Learn CSS as a Beginner- Day 2</a></li>
                        <li><a href="https://docs.github.com/en/get-started/quickstart/set-up-git">Learn Git and Set Up</a></li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Blogs;