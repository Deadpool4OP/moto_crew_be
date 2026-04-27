import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync.js';
import { sosService } from './sos.service.js';
import { ApiResponse } from '../../utils/ApiResponse.js';
const createSos = catchAsync(async (req, res) => {
    const sos = await sosService.createSos(req.user.id, req.body);
    res.status(httpStatus.CREATED).send(new ApiResponse(httpStatus.CREATED, 'SOS event created successfully', sos));
});
const getSosByRoom = catchAsync(async (req, res) => {
    const events = await sosService.getSosByRoom(req.params.roomId);
    res.send(new ApiResponse(httpStatus.OK, 'SOS events fetched successfully', events));
});
export const sosController = {
    createSos,
    getSosByRoom,
};
//# sourceMappingURL=sos.controller.js.map