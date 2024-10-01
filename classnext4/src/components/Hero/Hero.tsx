import BoxOne from "../BoxOne/BoxOne";
import BoxTwo from "../BoxTwo/BoxTwo";

export default function Hero(){
    return(
        <section className="flex justify-evenly">
  <BoxOne/>
  <BoxTwo/>
  </section>
    );
};