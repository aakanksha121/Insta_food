import React from 'react';
import { Outlet } from 'react-router-dom';
import load from '../Assets/images/Food Delivery.gif';

function Form() {
  return (
    <div>
      <main className="grid  grid-rows-1  items-center lg:grid-cols-2 w-full   h-screen m-auto font-PTSans">
        <section className="hidden h-full lg:block max-h-screen  rounded-lg ">
          <img src={load} alt="" className="w-full h-full  object-cover" />
        </section>
        <Outlet />
      </main>
    </div>
  );
}

export default Form;

