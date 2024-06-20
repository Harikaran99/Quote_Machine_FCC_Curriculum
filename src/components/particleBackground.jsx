import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import config from "./config/particles-config"
import { loadFull } from "tsparticles"

class ParticleBackground extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            init : false
        }
    }

    particlesLoaded(container) {
        console.log(container)
    }

    componentDidMount() {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadFull(engine);
            //await loadBasic(engine);
          }).then(() => {
            this.setState({init : true});
          });
    }

    render() {
        if(this.state.init) {
            return (
            <Particles id="tsparticles" options={config} particlesLoaded={this.particlesLoaded}>
            </Particles>
            )
        }
        return (
            <></>
        )
    }
}

export default ParticleBackground