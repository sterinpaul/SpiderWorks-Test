import { EmojiComponent } from "./EmojiComponent"
import { SearchDiscussion } from "./SearchDiscussion"

export const Main = ()=>{
    return(
        <div className="h-full w-full mt-24 md:mt-6 bg-white">
            {/* Discuss & Evolve Section */}
            <SearchDiscussion/>

            {/* Emoji of people */}
            <EmojiComponent/>
        </div>
    )
}