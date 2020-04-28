import React from "react";
import HoverPage from "./../MenuList";

function Menu() {
  return (
    <section>
      <div className='menuList'>
        <h3>Menu</h3>
        <hr className='hr-light my-4' />
        <h5>Hand harvested seafood</h5>

        <p>virgin soy, seaweed, aged vinegar</p>
        <br />
        <h5>Smoked eel cream</h5>
        <p>Osetra caviar, green walnuts, sea cucumber</p>
        <br />
        <h5>Fresh water marron</h5>
        <p>'tree bark'</p>
        <hr className='hr-light my-4' />
        <h5>Slow smoked black pig</h5>
        <p>fermented shiitake custard, heirloom grains, seeds, legumes</p>
        <br />
        <h5>Murray cod</h5>
        <p>shaved squid, oyster cream, coastal greens</p>
        <br />
        <h5>Roasted Maremma duck</h5>
        <p>burnt mandarin paste</p>
      </div>
      <hr className='hr-light my-4' />
      <HoverPage />
      <br />
      <br />
    </section>
  );
}

export default Menu;
