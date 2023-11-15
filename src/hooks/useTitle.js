import { useEffect } from "react";


const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - toyKitchen`
  },[title])
}

export default useTitle;