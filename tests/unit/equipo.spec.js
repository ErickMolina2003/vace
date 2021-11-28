import { shallowMount } from "@vue/test-utils";
import Equipo from "@/components/equipo.vue";

describe("Equipo renderiza correctamente", () => {
  it("Renderiza equipo.vue", () => {
    const infoEquipo =
      "Equipo  Erick Alejandro Molina 20201002723  Viviana Sofía Lanza 20171033265  Gustavo Alexi Raudales 20191004555  Cristian David Rivera 20191004778";
    const wrapper = shallowMount(Equipo, {
      propsData: { infoEquipo },
    });
    expect(wrapper.text()).toMatch(infoEquipo);
  });
});
