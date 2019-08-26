Blockly.JavaScript['hall_magnetic_block'] = function(block) {
  var value_hall_magnetic_sensor_pin = Blockly.JavaScript.valueToCode(block, 'HALL_MAGNETIC_SENSOR_PIN', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
Blockly.JavaScript["adc_pin_dummy_input_esp32"] = function (block) {
  let dropdown_name = block.getFieldValue("PIN");
  let code = `${dropdown_name}`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript["adc_pin_dummy_input_arduino"] = function (block) {
  let dropdown_name = block.getFieldValue("PINAR");
  let code = `${dropdown_name}`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
