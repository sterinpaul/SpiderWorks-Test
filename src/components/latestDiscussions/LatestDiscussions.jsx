import { DiscussionList } from "./DiscussionList"
import { Promotions } from "./Promotions"

export const LatestDiscussions = () => {
    return (
        <div className="px-8 py-20 h-full flex flex-wrap flex-col w-full md:flex-row md:justify-center gap-8 justify-center item-center">
            <DiscussionList />
            <Promotions />
        </div>
    )
}