import './TrialSection.scss'

import React, {useState, useEffect} from 'react'

import states from './states.json';
import districts from './districts2.json';
const soil_type_list = ['Black', 'Clayey', 'Loamy', 'Red', 'Sandy'];
const crop_type_list = ['Barley', 'Cotton', 'Ground Nuts', 'Maize', 'Millets', 'Oil seeds', 'Paddy', 'Pulses', 'Sugarcane', 'Tobacco', 'Wheat'];

function TrialSection() {

    const [data3, setData3] = useState(null);

    const [Loading, setLoading] = useState(-1);

    const [N_value, setN_value] = useState('');
    const [P_value, setP_value] = useState('');
    const [K_value, setK_value] = useState('');
    const [Ph_value, setPh_value] = useState('');
    const [state_value, setstate_value] = useState('0');
    const [district_value, setdistrict_value] = useState('0');
    const [Moisture_value, setMoisture_value] = useState('');
    const [CropType_value, setCropType_value] = useState('0');
    const [SoilType_value, setSoilType_value] = useState('0');
    const [start_month, setstart_month] = useState('1');
    const [end_month, setend_month] = useState('12');

    // Additional form fields
    const [District, setDistrict] = useState('');
    const [CultLand, setCultLand] = useState('');
    const [CropCultLand, setCropCultLand] = useState('');
    const [CropTillageDate, setCropTillageDate] = useState('');
    const [SeedlingsPerPit, setSeedlingsPerPit] = useState('');
    const [TransplantingIrrigationHours, setTransplantingIrrigationHours] = useState('');
    const [TransplantingIrrigationSource, setTransplantingIrrigationSource] = useState('');
    const [TransplantingIrrigationPowerSource, setTransplantingIrrigationPowerSource] = useState('');
    const [StandingWater, setStandingWater] = useState('');
    const [BasalDAP, setBasalDAP] = useState('');
    const [BasalUrea, setBasalUrea] = useState('');
    const [FirstTopDressFert, setFirstTopDressFert] = useState('');
    const [_1tdUrea, set_1tdUrea] = useState('');
    const [MineralFertAppMethod, setMineralFertAppMethod] = useState('');
    const [Harv_method, setHarv_method] = useState('');
    const [Harv_date, setHarv_date] = useState('');
    const [Threshing_date, setThreshing_date] = useState('');
    const [Acre, setAcre] = useState('');
    const [Block, setBlock] = useState('');
    const [LandPreparationMethod, setLandPreparationMethod] = useState('');
    const [CropTillageDepth, setCropTillageDepth] = useState('');
    const [CropEstMethod, setCropEstMethod] = useState('');
    const [NursDetFactor, setNursDetFactor] = useState('');
    const [TransDetFactor, setTransDetFactor] = useState('');
    const [TransIrriCost, setTransIrriCost] = useState('');
    const [OrgFertilizers, setOrgFertilizers] = useState('');
    const [Ganaura, setGanaura] = useState('');
    const [CropOrgFYM, setCropOrgFYM] = useState('');
    const [PCropSolidOrgFertAppMethod, setPCropSolidOrgFertAppMethod] = useState('');
    const [NoFertilizerAppln, setNoFertilizerAppln] = useState('');
    const [CropbasalFerts, setCropbasalFerts] = useState('');

    function getData(){

        setLoading(1);

        var requestOptions = {
            // mode:'no-cors',
            dataType: 'json',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                N: N_value, 
                P: P_value, 
                K: K_value, 
                // Ph: Ph_value,  
                state: states[state_value],  
                district: districts[state_value][district_value],
                moisture: Moisture_value,
                soil_type: SoilType_value,
                // soil_type: soil_type_list[SoilType_value],
                crop_type: CropType_value,
                // crop_type: crop_type_list[CropType_value]
                start_month: start_month,
                end_month: end_month,
                District: District,
                CultLand: CultLand,
                CropCultLand: CropCultLand,
                CropTillageDate: CropTillageDate,
                SeedlingsPerPit: SeedlingsPerPit,
                TransplantingIrrigationHours: TransplantingIrrigationHours,
                TransplantingIrrigationSource: TransplantingIrrigationSource,
                TransplantingIrrigationPowerSource: TransplantingIrrigationPowerSource,
                StandingWater: StandingWater,
                BasalDAP: BasalDAP,
                BasalUrea: BasalUrea,
                FirstTopDressFert: FirstTopDressFert,
                _1tdUrea: _1tdUrea,
                MineralFertAppMethod: MineralFertAppMethod,
                Harv_method: Harv_method,
                Harv_date: Harv_date,
                Threshing_date: Threshing_date,
                Acre: Acre,
                Block: Block,
                LandPreparationMethod: LandPreparationMethod,
                CropTillageDepth: CropTillageDepth,
                CropEstMethod: CropEstMethod,
                NursDetFactor: NursDetFactor,
                TransDetFactor: TransDetFactor,
                TransIrriCost: TransIrriCost,
                OrgFertilizers: OrgFertilizers,
                Ganaura: Ganaura,
                CropOrgFYM: CropOrgFYM,
                PCropSolidOrgFertAppMethod: PCropSolidOrgFertAppMethod,
                NoFertilizerAppln: NoFertilizerAppln,
                CropbasalFerts: CropbasalFerts
            })
        };

        // console.log(requestOptions)
        
        fetch('http://localhost:5000/yield', requestOptions)
            .then(response => response.json())
            .then(data3 => {
                console.log(data3);
                setData3(data3);
                setLoading(0);
            })
            .catch(error => {
                console.error('There was an error!', error);
                setData3("Error")
            });
    }

//    console.log('states: ',states);
//    console.log('districts',districts);

return (
    <div className="section trailSection">
        
        <div className="trailSectionRight">
            <h2>Predict The Fertilizer For Your Soil And Crop</h2>
            <form action="http://localhost:5000/yield" method="POST">
                <h3>Yield  Predictor</h3>
               
                
                
                {/* Additional form fields */}
                <div className="inputRow">
                
                    <div className="inputDiv">
                        <label htmlFor="CultLand">CultLand</label>
                        <input name="CultLand" type="text" placeholder="Enter value" value={CultLand}
                            onInput={g => setCultLand(g.target.value)} />
                    </div>
                </div>
                <div className="inputRow">
                    <div className="inputDiv">
                        <label htmlFor="CropCultLand">CropCultLand</label>
                        <input name="CropCultLand" type="text" placeholder="Enter value" value={CropCultLand}
                            onInput={g => setCropCultLand(g.target.value)} />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="CropTillageDate">CropTillageDate</label>
                        <input name="CropTillageDate" type="text" placeholder="Enter value" value={CropTillageDate}
                            onInput={g => setCropTillageDate(g.target.value)} />
                    </div>
                </div>
                <div className="inputRow">
                    <div className="inputDiv">
                        <label htmlFor="SeedlingsPerPit">SeedlingsPerPit</label>
                        <input name="SeedlingsPerPit" type="text" placeholder="Enter value" value={SeedlingsPerPit}
                            onInput={g => setSeedlingsPerPit(g.target.value)} />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="TransplantingIrrigationHours">TransplantingIrrigationHours</label>
                        <input name="TransplantingIrrigationHours" type="text" placeholder="Enter value" value={TransplantingIrrigationHours}
                            onInput={g => setTransplantingIrrigationHours(g.target.value)} />
                    </div>
                </div>
                <div className="inputRow">
                    <div className="inputDiv">
                        <label htmlFor="TransplantingIrrigationSource">TransplantingIrrigationSource</label>
                        <input name="TransplantingIrrigationSource" type="text" placeholder="Enter value" value={TransplantingIrrigationSource}
                            onInput={e => setTransplantingIrrigationSource(e.target.value)} />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="TransplantingIrrigationPowerSource">TransplantingIrrigationPowerSource</label>
                        <input name="TransplantingIrrigationPowerSource" type="text" placeholder="Enter value" value={TransplantingIrrigationPowerSource}
                            onInput={g => setTransplantingIrrigationPowerSource(g.target.value)} />
                    </div>
                </div>
                <div className="inputRow">
                    <div className="inputDiv">
                        <label htmlFor="StandingWater">StandingWater</label>
                        <input name="StandingWater" type="text" placeholder="Enter value" value={StandingWater}
                            onInput={g => setStandingWater(g.target.value)} />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="BasalDAP">BasalDAP</label>
                        <input name="BasalDAP" type="text" placeholder="Enter value" value={BasalDAP}
                            onInput={g => setBasalDAP(g.target.value)} />
                    </div>
                </div>
                <div className="inputRow">
                    <div className="inputDiv">
                        <label htmlFor="BasalUrea">BasalUrea</label>
                        <input name="BasalUrea" type="text" placeholder="Enter value" value={BasalUrea}
                            onInput={g => setBasalUrea(g.target.value)} />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="FirstTopDressFert">FirstTopDressFert</label>
                        <input name="FirstTopDressFert" type="text" placeholder="Enter value" value={FirstTopDressFert}
                            onInput={g => setFirstTopDressFert(g.target.value)} />
                    </div>
                </div>
                <div className="inputRow">
                    <div className="inputDiv">
                        <label htmlFor="_1tdUrea">_1tdUrea</label>
                        <input name="_1tdUrea" type="text" placeholder="Enter value" value={_1tdUrea}
                            onInput={g => set_1tdUrea(g.target.value)} />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="MineralFertAppMethod">MineralFertAppMethod</label>
                        <input name="MineralFertAppMethod" type="text" placeholder="Enter value" value={MineralFertAppMethod}
                            onInput={g => setMineralFertAppMethod(g.target.value)} />
                    </div>
                </div>
                <div className="inputRow">
                    <div className="inputDiv">
                        <label htmlFor="Harv_method">Harv_method</label>
                        <input name="Harv_method" type="text" placeholder="Enter value" value={Harv_method}
                            onInput={g => setHarv_method(g.target.value)} />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="Harv_date">Harv_date</label>
                        <input name="Harv_date" type="text" placeholder="Enter value" value={Harv_date}
                            onInput={g => setHarv_date(g.target.value)} />
                    </div>
                </div>
                <div className="inputRow">
                    <div className="inputDiv">
                        <label htmlFor="Threshing_date">Threshing_date</label>
                        <input name="Threshing_date" type="text" placeholder="Enter value" value={Threshing_date}
                            onInput={g => setThreshing_date(g.target.value)} />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="Acre">Acre</label>
                        <input name="Acre" type="text" placeholder="Enter value" value={Acre}
                            onInput={g => setAcre(g.target.value)} />
                    </div>
                </div>
                <div className="inputRow">
                    <div className="inputDiv">
                        <label htmlFor="Block">Block</label>
                        <input name="Block" type="text" placeholder="Enter value" value={Block}
                            onInput={g => setBlock(g.target.value)} />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="LandPreparationMethod">LandPreparationMethod</label>
                        <input name="LandPreparationMethod" type="text" placeholder="Enter value" value={LandPreparationMethod}
                            onInput={g => setLandPreparationMethod(g.target.value)} />
                    </div>
                </div>
                <div className="inputRow">
                    <div className="inputDiv">
                        <label htmlFor="CropTillageDepth">CropTillageDepth</label>
                        <input name="CropTillageDepth" type="text" placeholder="Enter value" value={CropTillageDepth}
                            onInput={g => setCropTillageDepth(g.target.value)} />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="CropEstMethod">CropEstMethod</label>
                        <input name="CropEstMethod" type="text" placeholder="Enter value" value={CropEstMethod}
                            onInput={g => setCropEstMethod(g.target.value)} />
                    </div>
                </div>
                <div className="inputRow">
                    <div className="inputDiv">
                        <label htmlFor="NursDetFactor">NursDetFactor</label>
                        <input name="NursDetFactor" type="text" placeholder="Enter value" value={NursDetFactor}
                            onInput={g => setNursDetFactor(g.target.value)} />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="TransDetFactor">TransDetFactor</label>
                        <input name="TransDetFactor" type="text" placeholder="Enter value" value={TransDetFactor}
                            onInput={g => setTransDetFactor(g.target.value)} />
                    </div>
                </div>
                <div className="inputRow">
                    <div className="inputDiv">
                        <label htmlFor="TransIrriCost">TransIrriCost</label>
                        <input name="TransIrriCost" type="text" placeholder="Enter value" value={TransIrriCost}
                            onInput={g => setTransIrriCost(g.target.value)} />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="OrgFertilizers">OrgFertilizers</label>
                        <input name="OrgFertilizers" type="text" placeholder="Enter value" value={OrgFertilizers}
                            onInput={g => setOrgFertilizers(g.target.value)} />
                    </div>
                </div>
                <div className="inputRow">
                    <div className="inputDiv">
                        <label htmlFor="Ganaura">Ganaura</label>
                        <input name="Ganaura" type="text" placeholder="Enter value" value={Ganaura}
                            onInput={g => setGanaura(g.target.value)} />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="CropOrgFYM">CropOrgFYM</label>
                        <input name="CropOrgFYM" type="text" placeholder="Enter value" value={CropOrgFYM}
                            onInput={g => setCropOrgFYM(g.target.value)} />
                    </div>
                </div>
                <div className="inputRow">
                    <div className="inputDiv">
                        <label htmlFor="PCropSolidOrgFertAppMethod">PCropSolidOrgFertAppMethod</label>
                        <input name="PCropSolidOrgFertAppMethod" type="text" placeholder="Enter value" value={PCropSolidOrgFertAppMethod}
                            onInput={g=> setPCropSolidOrgFertAppMethod(g.target.value)} />
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="NoFertilizerAppln">NoFertilizerAppln</label>
                        <input name="NoFertilizerAppln" type="text" placeholder="Enter value" value={NoFertilizerAppln}
                            onInput={g=> setNoFertilizerAppln(g.target.value)} />
                    </div>
                </div>
                <div className="inputRow">
                    <div className="inputDiv">
                        <label htmlFor="CropbasalFerts">CropbasalFerts</label>
                        <input name="CropbasalFerts" type="text" placeholder="Enter value" value={CropbasalFerts}
                            onInput={g=> setCropbasalFerts(g.target.value)} />
                    </div>
                </div>
                
                <button onClick={ getData } type="button">Submit</button>
                {
                    Loading == 1 ? 
                    <div className="resultDiv">
                        Loading....
                    </div> : 
                    data3 !== null ?
                        <div className="resultDiv">

                            yield: {data3.yield}
                        </div> : null
                }
            </form>
        </div>
        <div className="trailSectionLeft">
            <h1>
                Fertilizer 
            </h1>
            <h3>
                Enter your soil information and get a fertilizer recommendation
            </h3>
        </div>
    </div>
)
}

export default TrialSection