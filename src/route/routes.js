import React from "react";

export const PRIVATE_ROUTES = [
  {
    path: "/dashboard",
    title: "Painel Administrativo",
    component: () => <div>PROTEGIDO PAINEL ADM</div>
  }
];

export const NORMAL_ROUTES = [
  {
    path: "/",
    title: "Hello",
    component: () => <div>LOGIN</div>
  }
];
