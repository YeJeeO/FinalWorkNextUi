import React from "react";
import {Navbar, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import {Link, Button } from "@nextui-org/react";
import NextLink from "next/link";


export default function NavbarMenuProject() {
     return (
      <Navbar position="fixed" color="primary" variant="bordered">
                     <NavbarContent  color="primary" variant="bordered"   >
         <Link as={NextLink} href='/'>О нас</Link>
         <Link as={NextLink}  href='/second'>Преподаватели</Link>
         <Link as={NextLink}  href='/third'>Мероприятия</Link>
         <Link as={NextLink}  href='/fouth'>Галерея</Link>
         <Link as={NextLink}  href='/fifth'>Расписание</Link>
          
        </NavbarContent>
        <hr></hr>
        <Button
      disableRipple
      className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg"
    >
      Press me
    </Button>
      </Navbar>
      
    );
  }
  
  