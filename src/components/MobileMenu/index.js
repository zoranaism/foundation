import React, { Component } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import { Link } from "react-router-dom";
import "./style.css";

const menus = [
  {
    id: 1,
    title: "Home",
    link: "/home",
    submenu: [
      {
        id: 11,
        title: "Home style 1",
        link: "/home",
      },
      {
        id: 12,
        title: "Home style 2",
        link: "/home2",
      },
      {
        id: 13,
        title: "Home style 3",
        link: "/home3",
      },
    ],
  },
  // {
  //   id: 2,
  //   title: "About",
  //   link: "/about",
  // },
  // {
  //   id: 3,
  //   title: "Causes",
  //   link: "/case",
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "Causes",
  //       link: "/case",
  //     },
  //     {
  //       id: 32,
  //       title: "Causes Single",
  //       link: "/case-single",
  //     },
  //   ],
  // },
  // {
  //   id: 4,
  //   title: "Event",
  //   link: "/event",
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "Event",
  //       link: "/event",
  //     },
  //     {
  //       id: 42,
  //       title: "Event Single",
  //       link: "/event-details",
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   title: "Pages",
  //   link: "/",
  //   submenu: [
  //     {
  //       id: 71,
  //       title: "Gallary",
  //       link: "/gallery",
  //     },
  //     {
  //       id: 75,
  //       title: "Donate",
  //       link: "/donate",
  //     },
  //     {
  //       id: 76,
  //       title: "Volunteer",
  //       link: "/volunteer",
  //     },

  //     {
  //       id: 79,
  //       title: "Error 404",
  //       link: "/404",
  //     },
  //     {
  //       id: 80,
  //       title: "Shop",
  //       link: "/shop",
  //     },
  //     {
  //       id: 81,
  //       title: "Shop Single",
  //       link: "/shop-single",
  //     },
  //   ],
  // },

  // {
  //   id: 5,
  //   title: "Blog",
  //   link: "/blog",
  //   submenu: [
  //     {
  //       id: 51,
  //       title: "Blog",
  //       link: "/blog",
  //     },
  //     {
  //       id: 52,
  //       title: "Blog Left sidebar",
  //       link: "/blog-left",
  //     },
  //     {
  //       id: 53,
  //       title: "Blog full width",
  //       link: "/blog-fullwidth",
  //     },
  //     {
  //       id: 54,
  //       title: "Blog single",
  //       link: "/blog-details",
  //     },
  //     {
  //       id: 55,
  //       title: "Blog single Left sidebar",
  //       link: "/blog-details-left",
  //     },
  //     {
  //       id: 56,
  //       title: "Blog single Left sidebar",
  //       link: "/blog-details-fullwidth",
  //     },
  //   ],
  // },
  // {
  //   id: 88,
  //   title: "Contact",
  //   link: "/contact",
  // },
];

export default class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: 0,
  };

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };

  setIsOpen = (id) => () => {
    this.setState({
      isOpen: id === this.state.isOpen ? 0 : id,
    });
  };

  render() {
    const { isMenuShow, isOpen } = this.state;

    const ClickHandler = () => {
      window.scrollTo(10, 0);
    };

    return (
      <div>
        <div className={`mobileMenu ${isMenuShow ? "show" : ""}`}>
          {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}

          <ul className="responsivemenu">
            {menus.map((item) => {
              return (
                <li key={item.id}>
                  {item.submenu ? (
                    <p onClick={this.setIsOpen(item.id)}>
                      {item.title}
                      {item.submenu ? (
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      ) : (
                        ""
                      )}
                    </p>
                  ) : (
                    <Link onClick={ClickHandler} to={item.link}>
                      {item.title}
                    </Link>
                  )}
                  {item.submenu ? (
                    <Collapse isOpen={item.id === isOpen}>
                      <Card>
                        <CardBody>
                          <ul>
                            {item.submenu.map((submenu) => (
                              <li key={submenu.id}>
                                <Link
                                  onClick={ClickHandler}
                                  className="active"
                                  to={submenu.link}
                                >
                                  {submenu.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </CardBody>
                      </Card>
                    </Collapse>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* <div className="showmenu" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div> */}
      </div>
    );
  }
}
