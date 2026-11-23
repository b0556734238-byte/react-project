import { Album } from "./Album"
import { cerate } from "./cerate"
export const Main = () => {
     const famliy = [
            { name: 'מלי ואביגיל', picture: 'IMG_2827.JPG', min: 'נקבה', date:'20/08/2021' },
            { name: 'אלי', picture: 'IMG_2438 (2).JPG', min: 'זכר' ,date:'17/04/2025' },
            { name: 'אלי', picture: 'IMG_2380.JPG',min: 'זכר' , date:'17/04/2025' },
        ]

    return <>
      
    
        <Album famliy={famliy}>
                 </Album>
    </>
}