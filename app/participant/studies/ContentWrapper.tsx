//Some imports go here

// Progress header
// Points system
// Vertical Progress Bar
// Badges as children of the progress bar

export function ContentWrapper({ children }: {children:React.ReactNode}) {


    return (
        <>
            <div className= "justify-center flex flex-col h-dvh" >

                {children}

            </div>
        
        </>

    );

}

