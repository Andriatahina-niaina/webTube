import { Button } from "./Button"

interface CategoryPillsProps {}

export const CategoryPills : React.FC<CategoryPillsProps> = () =>{
    return (
        <div className="overflow-x-hidden relative">
            <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
                <Button variant="dark" className="py-1 px-3 roundesd-lg-whitespace-nowrap">All</Button>
                <Button variant="default" className="py-1 px-3 roundesd-lg-whitespace-nowrap">javascript</Button>
            </div>
        </div>
    )
}