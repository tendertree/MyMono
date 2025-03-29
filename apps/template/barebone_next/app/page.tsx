import ToggleTheme from "@ui/base/feature/ToggleTheme";
import Feature from "@ui/base/section/feature";

export default function Home() {
    return (
		
        <div className="">
			<section>
            <h1 className="bg-red-100 text-3xl">hello world</h1>
            hello this is my homepage!..?..?
            <p className="bg-blue-100">hemt</p>an did see..!
            <Feature />
            hehe..!?
            <button className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 ...">
                Save Changes..
            </button>
			<ToggleTheme/>
			</section>
        </div>)

}

