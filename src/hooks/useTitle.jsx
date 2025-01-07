import React from 'react'

 import function useTitle() {
    useEffect(() => {
        document.title = `${title} - CodeBook`;
    }, [title]);

  return null;

}
export default useTitle;