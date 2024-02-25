/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as addAttribute, j as renderHead, k as renderSlot, l as renderComponent, m as maybeRenderHead } from '../astro_B77jiQkh.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Precios de la luz PVPC de hoy"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/dev/Astro/PrecioLuz/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const res = await fetch("https://api.preciodelaluz.org/v1/prices/all?zone=PCB");
  const data = await res.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="text-2xl justify-center flex p-5  font-bold text-amber-200">Precio de la luz 💡</h1> <div> <ul class="p-14 pb-10 text-stone-300 text-lg mt-2"> <p class="my-4">Por la mañana ☕</p> <li${addAttribute([
    "mt-4",
    {
      "text-lime-400 font-semibold": data["08-09"]["is-cheap"],
      "text-orange-300": !data["08-09"]["is-cheap"]
    }
  ], "class:list")}>De 08:00 a 09:00 | ${data["08-09"].price} €/MWh</li> <li${addAttribute([
    "mt-4",
    {
      "text-lime-400 font-semibold": data["09-10"]["is-cheap"],
      "text-orange-300": !data["09-10"]["is-cheap"]
    }
  ], "class:list")}>De 09:00 a 10:00 | ${data["09-10"].price} €/MWh</li> <li${addAttribute([
    "mt-4",
    {
      "text-lime-400 font-semibold": data["10-11"]["is-cheap"],
      "text-orange-300": !data["10-11"]["is-cheap"]
    }
  ], "class:list")}>De 10:00 a 11:00 | ${data["10-11"].price} €/MWh</li> <li${addAttribute([
    "mt-4",
    {
      "text-lime-400 font-semibold": data["11-12"]["is-cheap"],
      "text-orange-300": !data["11-12"]["is-cheap"]
    }
  ], "class:list")}>De 11:00 a 12:00 | ${data["11-12"].price} €/MWh</li> <p class="my-4">Por el día 🌞</p> <li${addAttribute([
    "mt-4",
    {
      "text-lime-400 font-semibold": data["12-13"]["is-cheap"],
      "text-orange-300": !data["12-13"]["is-cheap"]
    }
  ], "class:list")}>De 12:00 a 13:00 | ${data["12-13"].price} €/MWh</li> <li${addAttribute([
    "mt-4",
    {
      "text-lime-400 font-semibold": data["13-14"]["is-cheap"],
      "text-orange-300": !data["13-14"]["is-cheap"]
    }
  ], "class:list")}>De 13:00 a 14:00 | ${data["13-14"].price} €/MWh</li> <li${addAttribute([
    "mt-4",
    {
      "text-lime-400 font-semibold": data["14-15"]["is-cheap"],
      "text-orange-300": !data["14-15"]["is-cheap"]
    }
  ], "class:list")}>De 14:00 a 15:00 | ${data["14-15"].price} €/MWh</li> <li${addAttribute([
    "mt-4",
    {
      "text-lime-400 font-semibold": data["15-16"]["is-cheap"],
      "text-orange-300": !data["15-16"]["is-cheap"]
    }
  ], "class:list")}>De 15:00 a 16:00 | ${data["15-16"].price} €/MWh</li> <li${addAttribute([
    "mt-4",
    {
      "text-lime-400 font-semibold": data["16-17"]["is-cheap"],
      "text-orange-300": !data["16-17"]["is-cheap"]
    }
  ], "class:list")}>De 16:00 a 17:00 | ${data["16-17"].price} €/MWh</li> <li${addAttribute([
    "mt-4",
    {
      "text-lime-400 font-semibold": data["17-18"]["is-cheap"],
      "text-orange-300": !data["17-18"]["is-cheap"]
    }
  ], "class:list")}>De 17:00 a 18:00 | ${data["17-18"].price} €/MWh</li> <p class="my-4">Vespertino 🌚</p> <li${addAttribute([
    "mt-4",
    {
      "text-lime-400 font-semibold": data["18-19"]["is-cheap"],
      "text-orange-300": !data["18-19"]["is-cheap"]
    }
  ], "class:list")}>De 18:00 a 19:00 | ${data["18-19"].price} €/MWh</li> <li${addAttribute([
    "mt-4",
    {
      "text-lime-400 font-semibold": data["19-20"]["is-cheap"],
      "text-orange-300": !data["19-20"]["is-cheap"]
    }
  ], "class:list")}>De 19:00 a 20:00 | ${data["19-20"].price} €/MWh</li> <li${addAttribute([
    "mt-4",
    {
      "text-lime-400 font-semibold": data["20-21"]["is-cheap"],
      "text-orange-300": !data["20-21"]["is-cheap"]
    }
  ], "class:list")}>De 20:00 a 21:00 | ${data["20-21"].price} €/MWh</li> <li${addAttribute([
    "mt-4",
    {
      "text-lime-400 font-semibold": data["21-22"]["is-cheap"],
      "text-orange-300": !data["21-22"]["is-cheap"]
    }
  ], "class:list")}>De 21:00 a 22:00 | ${data["21-22"].price} €/MWh</li> </ul> </div> </main> ` })}`;
}, "C:/dev/Astro/PrecioLuz/src/pages/index.astro", void 0);

const $$file = "C:/dev/Astro/PrecioLuz/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
