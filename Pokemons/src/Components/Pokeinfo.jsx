import React from "react";

const Pokeinfo = ({ data }) => {
  return (
    <div className="sticky">
      {!data ? (
        ""
      ) : (
        <>
          <span className="name">
            <h1>{data.name}</h1>
          </span>
          <div className="stats">
            {data.abilities.map((poke) => {
              return (
                <>
                  <h4>{poke.ability.name}</h4>
                </>
              );
            })}
          </div>
          <div className="card-background">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              alt="charmander"
            />
            <div className="abilities">
              <div className="group1">
                <div className="group">
                  {data.types.map((poke) => {
                    return (
                      <>
                        <h4>
                          <span> Type(s)</span> {poke.type.name}
                        </h4>
                      </>
                    );
                  })}
                </div>
                <div className="group">
                  {data.stats.length > 0 && (
                    <h4>
                      {data.stats[0].stat.name} : {data.stats[0].base_stat}
                    </h4>
                  )}
                  {/* <h4>Hp : 30</h4> */}
                </div>
                <div className="group">
                  <h4>Xp : {data.base_experience}</h4>
                </div>
              </div>
              <div className="group2">
                <div className="group">
                  {data.stats.length > 0 && (
                    <h4>Attack : {data.stats[1].base_stat}</h4>
                  )}
                  {/* <h4>Hp : 30</h4> */}
                </div>
                <div className="group">
                  {data.stats.length > 0 && (
                    <h4>Defense : {data.stats[2].base_stat}</h4>
                  )}{" "}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Pokeinfo;
