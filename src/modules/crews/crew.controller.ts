import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync.js';
import { crewService } from './crew.service.js';
import { ApiResponse } from '../../utils/ApiResponse.js';
import { ApiError } from '../../utils/ApiError.js';

const createCrew = catchAsync(async (req: any, res: any) => {
  const crew = await crewService.createCrew(req.body, req.user.id);
  res.status(httpStatus.CREATED).send(new ApiResponse(httpStatus.CREATED, 'Crew created successfully', crew));
});

const getMyCrews = catchAsync(async (req: any, res: any) => {
  const crews = await crewService.getMyCrews(req.user.id);
  res.send(new ApiResponse(httpStatus.OK, 'My crews fetched successfully', crews));
});

const getCrew = catchAsync(async (req: any, res: any) => {
  const crew = await crewService.getCrewById(req.params.crewId);
  if (!crew) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Crew not found');
  }
  res.send(new ApiResponse(httpStatus.OK, 'Crew fetched successfully', crew));
});

const joinCrew = catchAsync(async (req: any, res: any) => {
  const crew = await crewService.joinCrew(req.params.crewId, req.user.id);
  res.send(new ApiResponse(httpStatus.OK, 'Joined crew successfully', crew));
});

export const crewController = {
  createCrew,
  getMyCrews,
  getCrew,
  joinCrew,
};
