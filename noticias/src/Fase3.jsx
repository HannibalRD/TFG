import { useState } from 'react';

function TemasDesplegable() {
  const [temaSeleccionado, setTemaSeleccionado] = useState(null);
  const temas = [
    { nombre: 'Microplásticos en los Océanos', contenido: 'Los microplásticos son pequeñas partículas de plástico que miden menos de 5 mm de diámetro. Estos fragmentos provienen de la descomposición de plásticos más grandes y también se encuentran en productos de cuidado personal, como exfoliantes y cremas. La concienciación sobre los microplásticos se centra en sus efectos dañinos para la vida marina, ya que pueden ser ingeridos por organismos marinos, ingresando así en la cadena alimentaria. También se destaca la importancia de reducir la producción de productos que contienen microplásticos y promover la eliminación adecuada de desechos plásticos.' },
    { nombre: 'Protección de Arrecifes de Coral', contenido: ' Los arrecifes de coral son ecosistemas marinos de gran biodiversidad que albergan una variedad de especies de peces y otros organismos. La concienciación se enfoca en la conservación de estos ecosistemas frágiles, ya que están amenazados por la contaminación, la pesca destructiva, el cambio climático y la acidificación de los océanos. La protección de los arrecifes de coral implica la creación de áreas marinas protegidas y la promoción de prácticas de pesca sostenible.' },
    { nombre: 'Acuicultura Sostenible', contenido: 'La acuicultura sostenible se refiere a la cría de peces, moluscos y otros organismos marinos en un entorno controlado y sostenible. La concienciación sobre este tema se centra en la necesidad de abordar la sobrepesca y la explotación insostenible de los recursos marinos, alentando la producción de alimentos marinos de manera que minimice los impactos negativos en los ecosistemas acuáticos. Esto incluye la elección de especies adecuadas, la gestión de la calidad del agua y la reducción de residuos.' },
    { nombre: 'Conservación de Especies Marinas en Peligro de Extinción', contenido: 'La concienciación sobre la conservación de especies marinas en peligro de extinción se enfoca en la protección de animales marinos amenazados, como las tortugas marinas, los tiburones y las ballenas. Los esfuerzos van desde la implementación de medidas legales para la protección de hábitats críticos hasta la reducción de amenazas como la pesca incidental y la contaminación.' },
    { nombre: 'Impacto del Cambio Climático en los Manglares', contenido: 'Los manglares son ecosistemas costeros que proporcionan hábitats cruciales para una variedad de especies. La concienciación sobre el impacto del cambio climático en los manglares se centra en la elevación del nivel del mar, que puede inundar estos hábitats, y en la importancia de la adaptación, como la restauración de manglares y la gestión de la costa, para mantener su salud y función.' },
    { nombre: 'Basura Marina y Limpieza de Playas', contenido: ' La basura marina incluye desechos plásticos, vidrio, metal y otros materiales que contaminan las playas y los océanos. La concienciación se centra en la importancia de reducir la contaminación en las playas y promover la limpieza de costas y océanos. Esto implica educar sobre la gestión de residuos, el reciclaje y la reducción del consumo de productos de un solo uso.' },
    { nombre: 'Residuos Químicos en el Agua de Mar', contenido: 'Los residuos químicos en el agua de mar incluyen contaminantes industriales y productos químicos tóxicos que pueden tener efectos adversos en la vida marina y en la calidad del agua. La concienciación busca promover regulaciones más estrictas, tecnologías limpias y prácticas responsables en la industria para minimizar la contaminación química del agua de mar.' },
    { nombre: 'Restauración de Ecosistemas Marinos', contenido: 'La restauración de ecosistemas marinos se centra en la recuperación de hábitats dañados, como los humedales costeros y las praderas de pastos marinos. La concienciación se orienta hacia la importancia de restablecer estos entornos para promover la biodiversidad, mantener la calidad del agua y proteger la costa de la erosión.' },
    { nombre: 'Educar sobre la Importancia de Zonas de No Pesca', contenido: 'Las zonas de no pesca son áreas marinas donde se prohíbe la pesca comercial para permitir la recuperación de poblaciones de peces y la conservación de la biodiversidad. La concienciación se centra en la necesidad de estas áreas para mantener la salud de los ecosistemas marinos y promover la pesca sostenible fuera de estas zonas.' },
    { nombre: 'Contaminación del Agua de Lastre', contenido: 'La concienciación sobre la contaminación del agua de lastre se enfoca en los efectos negativos de la introducción de especies invasoras y contaminantes en los océanos a través del agua de lastre de los barcos. Se busca promover tecnologías de tratamiento de agua de lastre y regulaciones más estrictas para minimizar este problema y prevenir la dispersión de especies invasoras.' },
    { nombre: 'Eutrofización Marina', contenido: 'La eutrofización es un proceso en el que los nutrientes, como el nitrógeno y el fósforo, ingresan en aguas marinas, provocando un aumento descontrolado de algas y la disminución de oxígeno. La concienciación se centra en los efectos perjudiciales de la eutrofización en la vida marina y la necesidad de reducir la contaminación de nutrientes proveniente de la agricultura y la industria.' },
    { nombre: 'Contaminación Acústica Submarina', contenido: 'La contaminación acústica submarina se refiere al impacto negativo del ruido generado por actividades humanas en el océano, como la navegación, la construcción y la exploración sísmica, en la vida marina. La concienciación se centra en la necesidad de reducir el ruido submarino y sus efectos perjudiciales en mamíferos marinos, peces y otros organismos.' },
    { nombre: 'Plásticos Biodegradables en el Medio Ambiente Marino', contenido: 'Los plásticos biodegradables son una alternativa prometedora a los plásticos convencionales, pero su descomposición en el medio ambiente marino es un tema de preocupación. La concienciación se enfoca en la necesidad de comprender mejor la biodegradabilidad de estos materiales y en su gestión responsable.' },
    { nombre: 'Protección de Áreas Marinas Sensibles', contenido: 'Se refiere a la concienciación sobre la importancia de designar y preservar áreas marinas sensibles, como estuarios, zonas de reproducción y migración de especies, y hábitats críticos. Esto implica la implementación de regulaciones específicas para conservar estos lugares únicos y su biodiversidad.' },
    { nombre: 'Desperdicio de Alimentos del Mar', contenido: 'El desperdicio de alimentos del mar se refiere a la pérdida de pescado y mariscos debido a prácticas de pesca no sostenibles, la captura de especies no deseadas y la degradación de la calidad del pescado. La concienciación se centra en la necesidad de reducir el desperdicio de alimentos marinos y promover la pesca selectiva y sostenible.' },
    { nombre: 'Monitorización del Cambio Oceanográfico', contenido: 'La monitorización del cambio oceanográfico se refiere a la recopilación de datos científicos sobre variables como la temperatura del agua, la salinidad y la circulación oceánica. La concienciación se enfoca en la importancia de comprender y predecir el cambio climático y sus efectos en el océano.' },
    { nombre: 'Humedales Costeros y su Protección', contenido: 'Los humedales costeros, como los manglares y las marismas, proporcionan hábitats críticos para la vida marina y protegen las costas de la erosión. La concienciación se centra en la necesidad de conservar y restaurar estos ecosistemas para preservar la biodiversidad y la función de protección de la costa.' },
    { nombre: 'Gestión de la Contaminación por Petróleo', contenido: ' La gestión de la contaminación por petróleo se refiere a los esfuerzos para prevenir y responder a derrames de petróleo en el mar, como los que resultan de accidentes de barcos petroleros. La concienciación se enfoca en la importancia de prácticas seguras y eficaces de manejo de derrames para minimizar los impactos ambientales y proteger la vida marina.' },
    { nombre: 'Migración de Especies Marinas', contenido: 'La migración de especies marinas, como las ballenas, las tortugas y las aves marinas, es un fenómeno importante en los océanos. La concienciación se centra en la necesidad de proteger y preservar los corredores migratorios y los hábitats críticos a lo largo de estas rutas.' },
    { nombre: 'Participación Comunitaria en la Conservación Marina', contenido: 'La participación comunitaria es un enfoque clave para la concienciación sobre la conservación marina. Involucra a las comunidades locales en la toma de decisiones y la gestión de recursos marinos, promoviendo la sostenibilidad y la protección de sus entornos costeros y marinos.' },
  ];

  const handleTemaChange = (event) => {
    const tema = temas.find((t) => t.nombre === event.target.value);
    setTemaSeleccionado(tema);
  };

  return (
    <div>
      <label htmlFor="temas">Selecciona un tema: </label>
      <select id="temas" onChange={handleTemaChange}>
        <option value="">Selecciona un tema</option>
        {temas.map((tema) => (
          <option key={tema.nombre} value={tema.nombre}>
            {tema.nombre}
          </option>
        ))}
      </select>

      {temaSeleccionado && (
        <div>
          <h2>{temaSeleccionado.nombre}</h2>
          <p>{temaSeleccionado.contenido}</p>
        </div>
      )}
    </div>
  );
}

export default TemasDesplegable;
