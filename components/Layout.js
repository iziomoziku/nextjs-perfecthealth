import Footer from "./footer/Footer";

export default function Layout(props) {
  return (
    <div className="container">
      {props.children}
      <Footer />
    </div>
  );
}
