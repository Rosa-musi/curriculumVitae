import React from 'react'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import Info from '../components/Info'
import About from '../components/About'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Certificates from '../components/Certificates'
import Skills from '../components/Skills'
import Social from '../components/Social'
import useGetData from '../hooks/useGetData'


const App = () => {
    const data = useGetData()
    console.log(data)
    
    return data.length === 0 ? <h1>Cargando...</h1> : (
        <Main>
            <Sidebar>
                <About
                    avatar={data.avatar}
                    name={data.name}
                    profession={data.profession}
                    bio={data.bio}
                    address={data.address}
                />
            </Sidebar>
            <Info>
                <Education
                    data={data.education}
                />
                <Certificates 
                    data={data.certificates}
                />
                <Skills 
                    data={data.skills}
                />
            </Info>
        </Main>
        
    )
}

export default App