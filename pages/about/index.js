import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Nav/NavBar";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="h-full">
        <div className="bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
              <div>
                <h2 className="text-base text-sky-600 font-semibold tracking-wide uppercase">
                  About me
                </h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  Meet Jesus
                </h3>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi.
                </p>
              </div>
              <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <ul role="list-disc">
                  <li>Quis elit egestas venenatis mattis dignissim.</li>
                  <li>
                    Cras cras lobortis vitae vivamus ultricies facilisis tempus.
                  </li>
                  <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
                </ul>
                <p>
                  Sollicitudin tristique eros erat odio sed vitae, consequat
                  turpis elementum. Lorem nibh vel, eget pretium arcu vitae.
                  Eros eu viverra donec ut volutpat donec laoreet quam urna.
                </p>
                <p>
                  Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique
                  sit nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum
                  et et et sit. Faucibus sed non gravida lectus dignissim
                  imperdiet a.
                </p>
                <p>
                  Dictum magnis risus phasellus vitae quam morbi. Quis lorem
                  lorem arcu, metus, egestas netus cursus. In.
                </p>
                <p>
                  Rhoncus nisl, libero egestas diam fermentum dui. At quis
                  tincidunt vel ultricies. Vulputate aliquet velit faucibus
                  semper. Pellentesque in venenatis vestibulum consectetur nibh
                  id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi
                  enim fermentum lacus in. Viverra.
                </p>
                <h3>How we helped</h3>
                <p>
                  Tincidunt integer commodo, cursus etiam aliquam neque, et.
                  Consectetur pretium in volutpat, diam. Montes, magna cursus
                  nulla feugiat dignissim id lobortis amet. Laoreet sem est
                  phasellus eu proin massa, lectus. Diam rutrum posuere donec
                  ultricies non morbi. Mi a platea auctor mi.
                </p>
                <p>
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
