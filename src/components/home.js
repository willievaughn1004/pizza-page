import { buildComponent, appendComponent } from "./componentfunctions.js";
import pizzaCopy from "../img/pizza-copy.webp";

function createHomeCopy(elem) {
  const copyHomeComponent = buildComponent("div", "", { class: "copy-home" });

  const paragraph1 = buildComponent("p", "It started as an obsession");
  const paragraph2 = buildComponent("p", "But became my guiding light");
  const image = buildComponent("img", "", {
    src: pizzaCopy,
    alt: "pizza",
  });
  const paragraph3 = buildComponent("p", "Order online, visit us, or join us!");

  appendComponent(copyHomeComponent, [
    paragraph1,
    paragraph2,
    image,
    paragraph3,
  ]);

  appendComponent(`${elem}`, [copyHomeComponent]);
}

export default createHomeCopy;
