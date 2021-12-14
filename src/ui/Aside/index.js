import React from 'react'
import Button from '@material-ui/core/Button'

const Aside = ({ categories }) => {
    const categ = categories?.results
    return (
        <div className="aside">
            <h4>Discover more</h4>
            <div>
                {categ[0] ? (
                    categ.map((categ, i) => (
                        <Button color="primary" key={i}>
                            {categ.c_name}
                        </Button>
                    ))
                ) : (
                    <h4>No categiries found</h4>
                )}
            </div>
            {/* <a href='/'>See all topics</a> */}
        </div>
    )
}

export default Aside
