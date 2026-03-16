"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "SKINCARE", href: "/products?category=skincare" },
  { label: "MAKEUP", href: "/products?category=makeup" },
  { label: "HAIRCARE", href: "/products?category=haircare" },
  { label: "ABOUT", href: "/about-us" },
  { label: "CONTACT", href: "/contact" },
];

function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const pathname = usePathname();

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href.split("?")[0]);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="border-bottom"
      style={{ backgroundColor: "#FFF5F7", padding: 0 }}
    >
      <Container>
        <Navbar.Brand as={Link} href="/" className="d-flex align-items-center">
          <Image
            src="/logo-enhanced.png"
            alt="DreamBeauty"
            width={220}
            height={75}
            priority
            style={{ objectFit: "contain" }}
          />
        </Navbar.Brand>

        {/* Desktop Navigation */}
        <Navbar.Collapse id="navbar-nav" className="d-none d-lg-flex justify-content-end">
          <Nav>
            {navItems.map((item) => (
              <Nav.Link
                key={item.href}
                as={Link}
                href={item.href}
                className={isActive(item.href) ? "active-link" : ""}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle
          aria-controls="offcanvas-navbar"
          className="d-lg-none border-0"
          onClick={handleShow}
        />

        {/* Mobile Offcanvas Drawer */}
        <Offcanvas
          show={showOffcanvas}
          onHide={handleClose}
          placement="end"
          className="d-lg-none"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <Image
                src="/logo.png"
                alt="DreamBeauty"
                width={115}
                height={75}
                style={{ objectFit: "contain" }}
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              {navItems.map((item) => (
                <Nav.Link
                  key={item.href}
                  as={Link}
                  href={item.href}
                  onClick={handleClose}
                  className={`py-2 ${isActive(item.href) ? "active-link" : ""}`}
                >
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
