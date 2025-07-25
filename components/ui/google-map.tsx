
const GoogleMap: React.FC = () => {
  const src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.9646194761335!2d73.87814077616527!3d32.79319738315826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391fa1ae8cf89eb3%3A0xc925eb8e0fcdcf61!2sF.G%20Degree%20College%20For%20Men!5e0!3m2!1sen!2s!4v1753464494779!5m2!1sen!2s";
  return (
    <div className="map-container w-full h-64 md:h-[30.5rem] ">
      <iframe
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        src={src}
      ></iframe>
    </div>
  );
};

export default GoogleMap;
