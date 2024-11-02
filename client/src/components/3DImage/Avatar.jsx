import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';


export function Model(props) {
  // Load the main model
  const { nodes, materials, scene } = useGLTF(
    "/models/6724a08420d6ab89a4402984 (2).glb"
  );
  // const { message, onMessagePlayed, chat } = useChat();
  
  // // Load animations from the animations file
  const { animations } = useGLTF('/animations/animations.glb')
  const group = useRef()
  const { actions, mixer } = useAnimations(animations, group)

  useEffect(() => {
    if (actions) {
      // Play the first animation as an example
      const puthandontable = actions[Object.keys(actions)[0]]
      const sitdown = actions[Object.keys(actions)[1]]
      const typing = actions[Object.keys(actions)[2]]
      const idle = actions[Object.keys(actions)[3]]
      
    
      typing.play()

    }
    
  }, [actions])

 


  // useEffect(() => {
  //   if (!message) {
  //     return;
  //   }
  //   console.log(message);
  //   const audio = new Audio("data:audio/mp3;base64," + message.audio);
  //   audio.play();

  //   onMessagePlayed();
  //   console.log('after',message);
  // }
  // , [message]);

  return (
    <group 
        ref={group} 
        {...props} 
        dispose={null}
        scale={[3.5, 3.5, 3.5]}
        position={[0, -2, 0]}
      >
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
    </group>
  )
}

useGLTF.preload('/6724a08420d6ab89a4402984 (2).glb')
useGLTF.preload('/animations.glb')
