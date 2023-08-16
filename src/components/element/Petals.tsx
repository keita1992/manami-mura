import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { Engine, Container } from 'tsparticles-engine';
import { loadSlim } from "tsparticles-slim";

export const Petals = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          opacity: {
            value: 0.3,
            random: false,
          },
          number: {
            value: 30,
          },
          size: {
            value: 10,
            random: true,
          },
          move: {
            direction: "bottom",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          shape: {
            type: "image",
            options: {
              image: [
                {
                  src: 'flower.png', // あなたの桜の花びらの画像へのパス
                  width: 50,
                  height: 50,
                },
              ],
            },
          },
        },
      }}
    />
  );
}