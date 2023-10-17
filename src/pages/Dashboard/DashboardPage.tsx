import { SizeOption } from "../../common";
import { Card, Navbar } from "../../components";

const fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
export const DashboardPage = () => {
  const listCards = fibonacci.map((elemento, index) => (
    <Card key={index} number={elemento} sizeOption={SizeOption.medium} />
  ));
  return (
    <>
      <div className="layout">
        {/* NAVBAR */}
        <Navbar />
        {/* BODY */}
        <main>
          <div className="body__content">
            {/* <div className="Table-module--wrapper--d3b49" data-test="table">
              <div className="Table-module--container--a6bae Table-module--container--is-user-lonely--afd01">
                <div></div>
                <div className="Table-module--top--b3bb9">
                  <div className="Table-module--invite-players-container--7acba">
                    <div className="Table-module--invite-players-label--2a5a5">
                      Feeling lonely?{" "}
                      <span role="img" aria-label="sleeping">
                        😴
                      </span>
                    </div>
                    <div>
                      <button
                        className="Table-module--invite-players-button--3db24 ButtonLink-module--button-link--b40a3 is-clickable"
                        type="button"
                      >
                        <span className="is-clickable">Invite players</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div></div>
                <div className="Table-module--left--8e0b8"></div>
                <div className="Table-module--table--27541">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div className="Table-module--table-content--f8a60">
                    <div className="Table-module--table-caption--7bc74">
                      Pick your cards!
                    </div>
                  </div>
                </div>
                <div className="Table-module--right--cb999"></div>
                <div></div>
                <div className="Table-module--bottom--841c2">
                  <div className="Table-module--player-container--6c301">
                    <div className="Player-module--player-wrapper--5e61a">
                      <div className="Player-module--card-container--4487b Player-module--is-empty--aafd1"></div>
                      <div className="Player-module--profile-container--b6500">
                        <div
                          className="Player-module--player-name--6f268 notranslate"
                          translate="no"
                        >
                          Jc
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div> */}

            <div className="table__content">
              {/* cards around of table */}

              <div className="show-votes__votes"></div>
              <Card
                notShow={false}
                sizeOption={SizeOption.minimi}
                name="Jc"
                isSelect={true}
                number={3}
              />

              {/* table */}
              <div className="content__show-votes">
                <button className="votes__buton-show">Show Cards</button>
              </div>
            </div>
            <div className="list-cards">{listCards}</div>
          </div>
        </main>

        {/* FOTTER */}
        <footer></footer>
      </div>
    </>
  );
};
