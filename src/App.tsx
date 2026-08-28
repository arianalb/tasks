import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import background from "./backgroung.jpeg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Ariana Butler Hello
                World
            </header>
            <h1>Welcome to my website!</h1>;
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello world
            </p>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World!
            </Button>
            <Container>
                <Row>
                    <Col>
                        Here is the background for my macbook
                        <div
                            style={{
                                width: "200px",
                                height: "200px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <img
                            src={background}
                            alt="A soft, vintage-inspired floral pattern featuring oversized pink, peach, lavender, and blue flowers intertwined with delicate vines and leaves."
                        />
                        <div
                            style={{
                                width: "200px",
                                height: "200px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    Banana Bread Ingredients:
                    <ol>
                        <li>Ripe Bananas</li>
                        <li>All-Purpose Flour</li>
                        <li>Granulated Sugar</li>
                        <li>Butter</li>
                        <li>Eggs</li>
                        <li>Vanilla Extract</li>
                        <li>Baking Soda</li>
                        <li>Salt</li>
                        <li>Chocolate Chips</li>
                    </ol>
                    <div
                        style={{
                            width: "200px",
                            height: "200px",
                            backgroundColor: "red",
                        }}
                    ></div>
                </Row>
            </Container>
        </div>
    );
}

export default App;
