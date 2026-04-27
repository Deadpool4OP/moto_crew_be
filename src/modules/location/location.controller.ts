import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync.js';
import { locationService } from './location.service.js';
import { ApiResponse } from '../../utils/ApiResponse.js';

const updateLocation = catchAsync(async (req: any, res: any) => {
  const { roomId, ...locationData } = req.body;
  const location = await locationService.updateLocation(req.user.id, roomId, locationData);
  res.send(new ApiResponse(httpStatus.OK, 'Location updated successfully', location));
});

const getLocationByRoom = catchAsync(async (req: any, res: any) => {
  const locations = await locationService.getLocationByRoom(req.params.roomId);
  res.send(new ApiResponse(httpStatus.OK, 'Locations fetched successfully', locations));
});

export const locationController = {
  updateLocation,
  getLocationByRoom,
};
