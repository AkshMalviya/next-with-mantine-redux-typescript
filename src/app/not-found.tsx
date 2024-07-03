import React from "react";
export default function NotFound() {
    return (
        <div
            style={{
                background:
                    "linear-gradient(90deg, rgba(18,17,17,1) 16%, rgba(26,26,47,1) 63%, rgba(33,40,42,1) 91%)",
                position: "fixed",
                height: "100vh",
                width: "100vw",
                top: "0",
            }}>
            <main className="main__404">
                <div className="wave"></div>
                <div className="box__404">
                    <div className="text__404">
                        <h1>4</h1>
                        <h1>0</h1>
                        <h1>4</h1>
                    </div>
                    <div className="description__404">
                        <p className="title__404">Oops! page not found</p>
                        <p className="desc__404">
                            Sorry, the page you were looking for was not found.
                            Choose one of the following buttons to return
                        </p>
                        <div className="link__404">
                            <a href="/">Back</a>
                            <a href="/">Back to Home</a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
