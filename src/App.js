import Contact from './components/Contact';
import './App.css';
import image1 from './components/images/1.jpg'
import image2 from './components/images/2.jpg'
import image3 from './components/images/3.jpeg'
import image4 from './components/images/4.jpeg'




function App() {
 
 
 
  return (
    <div className="contacts">
    <Contact 
        image={image1} 
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
    />
    <Contact 
        image= {image2}

        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
    />
    <Contact 
        image= {image3}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
    />
    <Contact 
        image = {image4}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
    />
    
</div>
  );
}

export default App;
